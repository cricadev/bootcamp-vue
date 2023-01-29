import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("users", () => {
  const users = ref([]);
  const user = ref(null);
  const errorMessage = ref("");
  const loading = ref(false);
  const loadingUser = ref(false);
  const clientAuth = useSupabaseAuthClient();

  const client = useSupabaseClient();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async (credentials) => {
    const { email, password } = credentials;
    if (!validateEmail(email)) {
      return (errorMessage.value = "Please enter a valid email");
    }
    if (!password.length) {
      return (errorMessage.value = "Please enter a password");
    }
    loading.value = true;
    const { error, data } = await clientAuth.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      loading.value = false;
      return (errorMessage.value = error.message);
    }
    const { data: existingUser } = await client
      .from("users")
      .select()
      .eq("email", email)
      .single();

    user.value = {
      id: existingUser.id,
      username: existingUser.username,
      email: existingUser.email,
    };

    loading.value = false;
    errorMessage.value = "";
  };
  const handleSignup = async (credentials) => {
    const { email, password, username } = credentials;
    if (password.length < 6) {
      return (errorMessage.value = "Password must be at least 6 characters");
    }
    if (username.length < 3) {
      return (errorMessage.value = "Username must be at least 3 characters");
    }
    if (!validateEmail(email)) {
      return (errorMessage.value = "Please enter a valid email");
    }
    loading.value = true;
    const { data: userWithUsername } = await client
      .from("users")
      .select()
      .eq("username", username)
      .single();
    if (userWithUsername) {
      return (errorMessage.value = "Username already taken");
    }

    const { error } = await clientAuth.auth.signUp({
      email,
      password,
    });
    if (error) {
      loading.value = false;
      return (errorMessage.value = error.message);
    }
    await client.from("users").insert({
      username,
      email,
    });
    const { data: newUser } = await client
      .from("users")
      .select()
      .eq("email", email)
      .single();

    user.value = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    };

    loading.value = false;
  };
  const handleLogout = async () => {
    await clientAuth.auth.signOut();
    user.value = null;
  };

  const getUser = async () => {
    loadingUser.value = true;
    const { data } = await clientAuth.auth.getUser();

    if (!data.user) {
      loadingUser.value = false;
      return (user.value = null);
    }
    const { data: userWithEmail } = await client
      .from("users")
      .select()
      .eq("email", data.user.email)
      .single();

    user.value = {
      id: userWithEmail.id,
      username: userWithEmail.username,
      email: userWithEmail.email,
    };
    loadingUser.value = false;
  };

  const clearErrorMessage = () => {
    errorMessage.value = "";
  };
  return {
    errorMessage,
    users,
    user,
    handleLogin,
    loading,
    loadingUser,
    handleLogout,
    handleSignup,
    getUser,
    clearErrorMessage,
  };
});
