__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 15,
                  "end": 22
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "DebuggerStatement",
                        "start": 36,
                        "end": 45
                      }
                    ],
                    "start": 26,
                    "end": 48
                  },
                  "expression": false,
                  "start": 23,
                  "end": 48
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 14,
                "end": 48
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Literal",
                  "value": "goodbye",
                  "raw": "\"goodbye\"",
                  "start": 59,
                  "end": 68
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 83,
                          "end": 84
                        },
                        "start": 76,
                        "end": 85
                      }
                    ],
                    "start": 72,
                    "end": 88
                  },
                  "expression": false,
                  "start": 69,
                  "end": 88
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 54,
                "end": 88
              }
            ],
            "start": 8,
            "end": 90
          },
          "definite": false,
          "start": 4,
          "end": 90
        }
      ],
      "declare": false,
      "start": 0,
      "end": 90
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "debugger",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"goodbye\"",
    "start": 59,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 76,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  }
]
```
