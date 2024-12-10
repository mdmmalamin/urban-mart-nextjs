"use client";

import { Component, ReactNode } from "react";

interface FXErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface FXErrorBoundaryState {
  hasError: boolean;
}

class FXErrorBoundary extends Component<
  FXErrorBoundaryProps,
  FXErrorBoundaryState
> {
  constructor(props: FXErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default FXErrorBoundary;
