import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <main className="flex flex-1 justify-center items-center">
      <Card className="w-full max-w-lg mx-4">
        <CardHeader>
          <CardTitle className="text-center">Welcome to the Transaction Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Use the sidebar to navigate through the application.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

export default Index;