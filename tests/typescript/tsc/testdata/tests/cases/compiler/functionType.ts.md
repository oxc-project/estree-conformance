__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "salt",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 16,
        "end": 18
      },
      "expression": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "salt",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 23
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 29
          },
          "optional": false,
          "computed": false,
          "start": 19,
          "end": 29
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 30,
            "end": 37
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 39,
            "end": 41
          }
        ],
        "optional": false,
        "start": 19,
        "end": 42
      },
      "directive": null,
      "start": 19,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 57
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "return 5",
              "raw": "\"return 5\"",
              "start": 58,
              "end": 68
            }
          ],
          "start": 45,
          "end": 69
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 44,
        "end": 72
      },
      "directive": null,
      "start": 44,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "salt",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "salt",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "\"return 5\"",
    "start": 58,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  }
]
```
