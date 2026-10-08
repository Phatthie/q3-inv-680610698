import { Button } from "@/components/ui/button";
import { Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger, } from "@/components/ui/drawer";
  import { Badge } from "@/components/ui/badge";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="secondary">Phatthira Rojanaphiboontham</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="size-full rounded-2xl bg-muted">
            <div className="p-3">
              <img src="mypic.jpg" alt=""className="h-75 flex items-center justify-center" />
              <p className="text-xl">Phatthira Rojanaphiboontham</p>
              <span className="text-muted-foreground">นักศึกษาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</span>
              <div className="my-2">
                <div className="my-2">
                  <Badge>Hobbies</Badge>
                  <span> listening to musics,watch cartoon</span>
                </div>
                <div className="my-2">
                  <Badge>Email</Badge>
                  <span> phatthira_r@cmu.ac.th</span>
                </div>
                <div className="my-2">
                  <Badge>Social</Badge>
                  <span> -</span>
                </div>
              </div>
              <div className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-20 text-xl">
                รหัสนักศึกษา : 680610698
              </div>
            </div>
            
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    // <div className="flex-1 p-4">
    //   <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
    //     Phatthira Rojanaphiboontham
    //   </button>
    // </div>
  );
}
