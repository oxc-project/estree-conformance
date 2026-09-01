__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "buffer",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 12
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 30
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 8,
                "raw": "8",
                "start": 31,
                "end": 32
              }
            ],
            "start": 15,
            "end": 33
          },
          "definite": false,
          "start": 6,
          "end": 33
        }
      ],
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "buffer2",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 48
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "buffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 57
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "transfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 66
              },
              "optional": false,
              "computed": false,
              "start": 51,
              "end": 66
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 51,
            "end": 68
          },
          "definite": false,
          "start": 41,
          "end": 68
        }
      ],
      "declare": false,
      "start": 35,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "buffer",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 77
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "detached",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 86
        },
        "optional": false,
        "computed": false,
        "start": 71,
        "end": 86
      },
      "directive": null,
      "start": 71,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "buffer2",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 95
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "detached",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 104
        },
        "optional": false,
        "computed": false,
        "start": 88,
        "end": 104
      },
      "directive": null,
      "start": 88,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 105
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "buffer",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 15,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 19,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "buffer2",
    "start": 41,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "buffer",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "transfer",
    "start": 58,
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
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "buffer",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "detached",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "buffer2",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "detached",
    "start": 96,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  }
]
```
