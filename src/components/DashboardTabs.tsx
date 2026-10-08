import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useItemStore } from "@/store/dataStore";
import { OverviewCards } from "@/components/OverviewCards";
import { CategoryCards } from "@/components/CategoryCards";
export function DashboardTabs() {
  return (
    <div className="flex max-w-5xl mx-auto space-y-8">
      <Tabs defaultValue="Overview" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="Overview">Overview</TabsTrigger>
          <TabsTrigger value="By category">By Category</TabsTrigger>
        </TabsList>
        <TabsContent value="Overview">
          <OverviewCards/>
        </TabsContent>
        <TabsContent value="By category">
          <CategoryCards/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
