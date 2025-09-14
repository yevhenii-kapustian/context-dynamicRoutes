import UserName from "@/components/UserName"
import Meal from "@/components/Meal"
import LogoutButton from "@/components/LogoutButton"

const ProfilePage = () => {
    return(
        <section>
            <h3>Hey <UserName/>!</h3>
            <Meal/>
            <LogoutButton/>
        </section>
    )
}

export default ProfilePage