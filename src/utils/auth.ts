export const useAuth = () : boolean => {
    const token = localStorage.getItem("token");
    fetch("/api/auth/token", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        })
        .then((res) => res.json())
        .then((data) => {
            if (!data.success) {
            return false;
            }
            return true;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
    return !!token;
}