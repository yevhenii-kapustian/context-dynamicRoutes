import UserName from "@/components/UserName"
import Meal from "@/components/Meal"

const ProfilePage = () => {
    return(
        <section>
            <h3>Hey <UserName/>!</h3>
            <Meal/>
        </section>
    )
}

export default ProfilePage