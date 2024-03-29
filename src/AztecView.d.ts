import { Component, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

declare namespace AztecView {
    interface Props {
        onActiveFormatsChange?: (formats: string[]) => void;
        onContentSizeChange?: (size: { width: number, height: number }) => void;
        onHTMLContentWithCursor?: (text: string, selectionStart: number, selectionEnd: number) => void;
        onChange?: (event: React.ChangeEvent<any>) => void;
        onSelectionChange?: (selectionStart: number, selectionEnd: number, text: string, event: any) => void;
        onKeyDown?: (event: React.KeyboardEvent<any>) => void;
        onFocus?: (event: any) => void;
        onBlur?: (event: any) => void;
        style?: StyleProp<ViewStyle>;
        deleteEnter?: any;
        text?: {
            text: string;
            selection?: {
              start: number;
              end: number;
            };
        };
        triggerKeyCodes?: string[];
    }
}

declare class AztecView extends Component<AztecView.Props> {
    static InputState: any;
    static KeyCodes: {
        [key: string]: string;
    };
    blur(): void;
    focus(): void;
    isFocused(): boolean;
    onRemoveMarkFormatting(): void;
    onMarkFormatting(color: string): void;
}

export default AztecView;
