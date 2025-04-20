import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogPortal,
    AlertDialogOverlay,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
  export default function AlertDialogs() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="Button">Get Started</Button>
        </AlertDialogTrigger>
        
        <AlertDialogPortal>
          <AlertDialogOverlay className="alert-dialog-overlay" />
          <AlertDialogContent className="alert-dialog-content">
            <AlertDialogHeader className="alert-dialog-header">
              <AlertDialogTitle className="alert-dialog-title">
                 Coming soon
              </AlertDialogTitle>
              <AlertDialogDescription className="alert-dialog-description">
              <p className="status-message">
                We're actively building this feature!<br />
                Our teams are working hard to bring you<br />
                a secure and reliable real estate tokenization platform.
              </p>

              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="alert-dialog-footer">
              <AlertDialogCancel className="alert-dialog-cancel">
                Cancel
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    )
  }