# JavaScript 클로저(Closure)

## 클로저란 무엇인가?

클로저(Closure)는 JavaScript에서 함수와 그 함수가 선언될 때의 렉시컬 환경(Lexical Environment)이 결합된 개념이다. 클로저는 함수가 자신이 선언된 환경 외부에서도 변수에 접근할 수 있도록 허용한다. 즉, 함수가 다른 함수 내부에서 정의되어도 그 외부 함수의 변수에 접근할 수 있는 특성을 가지고 있다. 이때 외부 함수의 변수에 접근할 수 있는 것은 클로저가 함수가 선언될 때의 스코프(변수 유효 범위)를 기억하고, 이 함수가 실행될 때 그 스코프에 대한 참조를 유지하는 것이기 때문이다.

## 클로저를 사용하는 목적

### 1. 캡슐화 (Encapsulation)
캡슐화는 객체 지향 프로그래밍에서 자주 등장하는 개념으로, 객체의 내부 상태를 숨기고, 외부에서 직접 접근하지 못하도록 제한하는 것이다. 클로저는 이 캡슐화를 구현하는 데 매우 유용하다.

JavaScript에서 객체의 프로퍼티나 메서드에 직접 접근하는 것을 막는 방법으로 클로저를 사용할 수 있다. 외부에서는 객체의 상태를 직접적으로 변경하거나 접근할 수 없고, 대신 정의된 메서드를 통해서만 상태를 수정하거나 조회할 수 있다.

```javascript
function createCounter() {
  let count = 0; // 외부에서 직접 접근할 수 없는 변수

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2

console.log(counter.getCount()); // 2

counter.decrement(); // 1
```

위 예시에서 count는 외부에서 직접 접근할 수 없고, increment, decrement, getCount 메서드를 통해서만 변경되고 조회될 수 있다. 이는 클로저를 사용한 캡슐화의 좋은 예시다.

### 2. 데이터 은닉 (Data Hiding)
데이터 은닉은 캡슐화와 밀접한 관련이 있지만, 좀 더 구체적으로 객체 내부 데이터나 상태를 외부에서 접근할 수 없도록 숨기는 기법이다. 클로저는 함수 내부에서 변수에 대한 접근을 제한하여 데이터 은닉을 실현할 수 있다.

```javascript
function bankAccount(balance) {
  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
      }
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
      }
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = bankAccount(1000);
account.deposit(500);
account.withdraw(200);

console.log(account.getBalance()); // 1300
```

여기서 balance는 bankAccount 함수 내부에서 정의된 변수로, 외부에서 직접 접근할 수 없고 deposit, withdraw, getBalance 메서드를 통해서만 조작할 수 있다. 이렇게 클로저는 중요한 데이터를 외부에서 숨기는 방식으로 데이터를 은닉한다.

## 클로저의 메모리 관점
클로저는 메모리 관점에서 중요한 동작 원리를 가진다. 클로저가 생성되면 그 함수가 참조하는 외부 변수들은 렉시컬 환경(Lexical Environment)에 의해 유지된다. 이렇게 되면 클로저가 외부 함수의 변수를 참조하므로, 외부 함수가 종료된 후에도 그 변수들은 메모리에서 사라지지 않고, 클로저를 통해 계속 접근할 수 있다.

### 1. 실행 컨텍스트(Execution Context)
JavaScript에서 코드가 실행될 때마다 실행 컨텍스트가 생성된다. 실행 컨텍스트는 코드 실행에 필요한 정보(변수, 함수 선언 등)를 포함하는 객체이다. 함수가 실행될 때마다 새로운 실행 컨텍스트가 만들어지고, 함수 실행이 종료되면 해당 실행 컨텍스트는 스택에서 제거된다.

하지만 클로저는 이 실행 컨텍스트와 관련된 중요한 특성을 가진다. 함수가 실행되더라도, 그 함수 내부에서 참조한 외부 변수는 해당 실행 컨텍스트가 종료되더라도 계속해서 유지된다. 이 덕분에 클로저가 외부 변수에 계속 접근할 수 있게 된다.

### 2. 렉시컬 환경(Lexical Environment)
렉시컬 환경은 변수와 함수가 어떤 스코프에서 유효한지를 관리하는 구조이다. JavaScript에서 함수가 선언될 때, 해당 함수는 자신이 선언된 환경의 렉시컬 환경을 "기억"한다. 클로저는 이 렉시컬 환경을 참조하여, 그 외부 함수가 종료된 이후에도 외부 변수에 계속 접근할 수 있게 된다. (위에서 "기억" 한다는 것은 기억해야 할 메모리 주소를 변수에 담아두었다고 생각할 수 있다.)

```javascript
function outerFunction() {
  let outerVariable = "[INFO] OUTER";
  return function innerFunction() {
    console.log(outerVariable); // outerVariable에 접근
  };
}

const closure = outerFunction();
closure(); // [INFO] OUTER
```

위 예시에서 innerFunction은 outerFunction의 실행 컨텍스트가 종료되었음에도 불구하고, outerVariable에 접근할 수 있다. 이는 innerFunction이 outerFunction의 렉시컬 환경을 기억하고 있기 때문이다.

### 3. 가비지 컬렉션(GC)
가비지 컬렉션(GC)은 더 이상 필요 없는 메모리 공간을 자동으로 정리하는 JavaScript의 메모리 관리 방식이다. 클로저를 사용하면, 외부 함수가 종료된 후에도 그 함수의 변수들이 메모리에서 해제되지 않고, 클로저를 통해 계속 접근할 수 있게 된다.

클로저로 인해 참조가 유지되면, 해당 변수는 가비지 컬렉터에 의해 수거되지 않는다. 이는 메모리 누수를 유발할 수 있으므로, 클로저를 사용할 때는 이러한 특성을 잘 이해하고 적절히 관리하는 것이 중요하다.

## 클로저를 사용하지 않으면 위험한 예시
클로저를 사용하지 않으면, 데이터가 외부에서 쉽게 수정되거나 의도치 않게 변경될 수 있다. 아래는 클로저를 사용하지 않은 경우의 위험한 예시이다.

### 1. 클로저를 사용하지 않은 상태
```javascript
function createCounter() {
  let count = 0; // 외부에서 접근 가능한 변수

  setInterval(function() {
    count++;
    console.log(count); // count 값을 출력
  }, 1000);
}

createCounter(); // count는 전역에서 계속 접근 가능
```

위 코드에서 count 변수는 createCounter 함수 안에서 선언되었지만, setInterval 안에서 계속 참조되고 있습니다. 그러나 count는 createCounter 함수의 외부에 위치하고 있기 때문에, setInterval이 실행되는 동안 다른 코드에서 의도치 않게 count 값을 변경할 수 있습니다. 이는 데이터 무결성에 큰 위험을 초래할 수 있습니다.

### 2. 클로저를 사용한 안전한 상태
```javascript
function createCounter() {
  let count = 0; // 외부에서 접근할 수 없는 변수
  return function() {
    count++;
    console.log(count); // count 값을 출력
  };
}

const counter = createCounter();
setInterval(counter, 1000); // 클로저를 사용하여 count 값 보호
```

위 코드에서는 count가 클로저 내부에 숨겨져 있으므로, 외부에서는 count에 접근할 수 없다. setInterval에서 호출되는 함수는 createCounter의 렉시컬 환경을 기억하므로, count 값은 안전하게 관리된다. 이렇게 클로저를 사용하면 데이터 무결성을 보호할 수 있다.

## 클로저 사용 예시
클로저의 사용 예시로, setTimeout 함수와 클로저를 함께 사용하는 경우이다.

```javascript
function createTimer() {
  let counter = 0;

  return function() {
    counter++;
    console.log(counter);
  };
}

const timer = createTimer();

setInterval(timer, 1000); // 1초마다 1씩 증가하는 카운터
```

위 코드는 createTimer 함수가 반환하는 클로저를 사용하여, counter 변수에 접근하는 예시이다. setInterval을 사용하여 1초마다 클로저가 실행되면서, counter 값이 계속 증가하는 모습을 볼 수 있다.

## 결론

클로저는 JavaScript에서 매우 중요한 개념으로, 함수가 선언된 환경을 기억하는 특성 덕분에 데이터 은닉, 캡슐화 등 다양한 목적을 구현할 수 있다. 단, 메모리 관리 측면에서 클로저는 변수의 생명 주기와 가비지 컬렉션에 영향을 미치므로, 사용 시 주의를 기울여야한다.