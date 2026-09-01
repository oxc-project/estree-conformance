__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 25
        },
        "generator": true,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 40,
                  "end": 41
                },
                "start": 34,
                "end": 41
              },
              "directive": null,
              "start": 34,
              "end": 42
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "YieldExpression",
                "delegate": false,
                "argument": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 53,
                  "end": 54
                },
                "start": 47,
                "end": 54
              },
              "directive": null,
              "start": 47,
              "end": 55
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "YieldExpression",
                "delegate": true,
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 68,
                      "end": 69
                    }
                  ],
                  "start": 67,
                  "end": 70
                },
                "start": 60,
                "end": 70
              },
              "directive": null,
              "start": 60,
              "end": 71
            }
          ],
          "start": 28,
          "end": 73
        },
        "expression": false,
        "start": 7,
        "end": 73
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 7,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 34,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 47,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 9
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  }
]
```
