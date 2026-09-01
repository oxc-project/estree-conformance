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
                  "start": 56,
                  "end": 65
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
                          "start": 80,
                          "end": 81
                        },
                        "start": 73,
                        "end": 82
                      }
                    ],
                    "start": 69,
                    "end": 85
                  },
                  "expression": false,
                  "start": 66,
                  "end": 85
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 51,
                "end": 85
              }
            ],
            "start": 8,
            "end": 87
          },
          "definite": false,
          "start": 4,
          "end": 87
        }
      ],
      "declare": false,
      "start": 0,
      "end": 87
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 87
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
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"goodbye\"",
    "start": 56,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 73,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  }
]
```
