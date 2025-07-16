import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useEffect } from "react";
import { useLocalstorageState } from "rooks";
import { isWebGL2Supported, isWebGLSupported } from "webgl-detector";

export function WebGlChecker(): React.ReactElement {
  const [skipWebGlCheck, setSkipWebGlCheck] = useLocalstorageState<boolean>(
    "skipWebGlCheck",
    false,
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [checked, setChecked] = useLocalstorageState<boolean>(false);

  useEffect(() => {
    if (!skipWebGlCheck && !isWebGLSupported() && !isWebGL2Supported()) {
      setSkipWebGlCheck(true);
      onOpen();
    }
  }, [skipWebGlCheck, setSkipWebGlCheck]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              WebGL not supported
            </ModalHeader>
            <ModalBody>
              <p>
                Your browser does not support WebGL, which is required for this
                site to function properly.
              </p>
              <p>
                Please use a modern browser with WebGL support, enable WebGL in
                your browser settings, or update your current browser to the
                latest version.
              </p>
            </ModalBody>
            <ModalFooter className="flex flex-col gap-5">
              <Checkbox
                className="mt-4"
                defaultSelected={false}
                onChange={({ target: { checked } }) => setChecked(checked)}
              >
                Skip this check in the future
              </Checkbox>
              <Button
                onPress={() => {
                  onClose();
                  setSkipWebGlCheck(checked);
                }}
              >
                Dismiss
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
