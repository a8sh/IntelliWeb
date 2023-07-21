import Image from "next/image";
type LoaderProps = {
    m1: string; // Assuming m1 is a string, you can change it to the appropriate type if needed
  };
export const Loader = ({ m1 }: LoaderProps) => {
    return(
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image 
                alt='logo'
                fill
                src='/logo.png'/>
            </div>
            <p className="text-sm text-muted-foreground">{m1}</p>
        </div>
    )
};