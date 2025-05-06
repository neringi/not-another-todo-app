
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddToDoForm from "./AddToDoForm";
import Button from "./Button";

export default function Sidebar() {

  const { login, logout, register, isAuthenticated, isLoading, user } = useKindeAuth(); 
  return (

    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[1.6rem] pt-[1.125rem] pb-[1.75rem]">
        <AddToDoForm />

        <div className="mt-auto space-y-2">
          {isLoading ? null :
            isAuthenticated ? (

              <>
              <p className="text-small opacity-25">Logged in as {user?.email}</p>
              <Button onClick={logout} buttonType="secondary">Logout</Button>
              </>
            ) : (
              <>
              <Button onClick={login} buttonType="secondary">Login</Button>
              <Button onClick={register} buttonType="secondary">Register</Button>
              </>
            )
          }
        </div>
    </section>
    
  )
}
