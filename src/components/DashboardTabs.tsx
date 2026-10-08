import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useItemStore } from "@/store/dataStore";
import { OverviewCards } from "@/components/OverviewCards";
import { CategoryCards } from "@/components/CategoryCards";
export function DashboardTabs() {
  const [mode, setMode] = useState<"Overview" | "By Category">("Overview");
  return (
    <div className="flex max-w-5xl mx-auto space-y-8">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Overview</TabsTrigger>
          <TabsTrigger value="password">By Category</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <OverviewCards/>
        </TabsContent>
        <TabsContent value="password">
          <CategoryCards/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
