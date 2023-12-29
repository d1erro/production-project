import React, { type ErrorInfo, type ReactNode } from "react"
import { PageError } from "@/widgets/PageError"

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: any
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack)
    }

    render() {
        if (this.state.hasError) {
            return <PageError/>
        }
        return this.props.children
    }
}

export default ErrorBoundary
