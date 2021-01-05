import React from 'react';
import { ErrorImageContainer, ErrorImageText, ErrorImageOverlay } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
                    <ErrorImageText>Sorry, this page is broken.</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;