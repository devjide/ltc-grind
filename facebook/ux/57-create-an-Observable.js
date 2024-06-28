/* https://bigfrontend.dev/problem/create-an-Observable) */

class Observable {
  constructor(setup) {
    this._setup = setup;
  }

  subscribe(subscriber) {
    // Wrapper object for the subscriber
    const subscriberWrapper = {
      unsubscribed: false,
      next(value) {
        // Ignore notifications if unsubscribed
        if (this.unsubscribed) return;

        // Check if the subscriber is a function and call it with the value
        if (subscriber instanceof Function) return subscriber(value);

        // If subscriber has a `next` method, call it with the value
        return subscriber.next ? subscriber.next(value) : null;
      },
      error(value) {
        // Ignore errors if unsubscribed
        if (this.unsubscribed) return;

        // Unsubscribe and handle the error event
        this.unsubscribe();
        return subscriber.error ? subscriber.error(value) : null;
      },
      complete() {
        // Ignore completion if unsubscribed
        if (this.unsubscribed) return;

        // Unsubscribe and handle the completion event
        this.unsubscribe();
        return subscriber.complete ? subscriber.complete() : null;
      },
      unsubscribe() {
        // Mark the subscriber as unsubscribed
        this.unsubscribed = true;
      },
    };

    // Call the setup function and pass the subscriberWrapper
    this._setup(subscriberWrapper);

    // Return the subscriberWrapper as the subscription object
    return subscriberWrapper;
  }
}