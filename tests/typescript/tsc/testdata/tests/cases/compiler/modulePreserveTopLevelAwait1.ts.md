__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "init": null,
            "definite": false,
            "start": 17,
            "end": 18
          }
        ],
        "declare": false,
        "start": 11,
        "end": 18
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 22,
        "end": 24
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 26,
        "end": 28
      },
      "start": 0,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolve",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 50
            },
            "optional": false,
            "computed": false,
            "start": 35,
            "end": 50
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 35,
          "end": 52
        },
        "start": 29,
        "end": 52
      },
      "directive": null,
      "start": 29,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 55,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 11,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 43,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  }
]
```
