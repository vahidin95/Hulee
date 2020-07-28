import * as React from 'react';
import { LocationState } from './AppState';
import { TimeTrackingStore } from './TimeTrackingStore';
import { TimerStore } from './TimerState';
}

export function consume<ContextProps> (Consumer: React.Consumer<ContextProps>) {
  retu
      }
    }

    (DecoratedConsumer as any).displayName = DecoratedComponent.displayName || DecoratedComponent.name

    return DecoratedConsumer as T
  }
}

/**
 * Decorator to form a HOC that acts like a react context consumer.
 * Useful when you want context to be made available in an entire component and not just in render.
 *
 * 
 * 
 * 
 * Example:
 * type MyContextProps = {foo: string};
 * const MyContext = createContext<MyContextProps>({foo: 'bar'});
 *
 * @consume(MyContext.Consumer)
 * class MyComponent extends React.Component<MyContextProps> {
 *   componentDidMount () {
 *     // Context is now available in the entire component
 *     console.log(this.props.foo);
 *   }
 *
 *   render () {
 *     return <span>{this.props.foo}</span>;
 *   }
 * }
 */
