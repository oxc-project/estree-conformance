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
            "name": "socket",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WebSocket",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 31
                },
                "typeArguments": null,
                "start": 22,
                "end": 31
              },
              "start": 20,
              "end": 31
            },
            "start": 14,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 31
        }
      ],
      "declare": true,
      "start": 0,
      "end": 32
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
            "name": "bytes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Uint8Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 64
                },
                "typeArguments": null,
                "start": 54,
                "end": 64
              },
              "start": 52,
              "end": 64
            },
            "start": 47,
            "end": 64
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 64
        }
      ],
      "declare": true,
      "start": 33,
      "end": 65
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
            "name": "socket",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 72
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "send",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 77
          },
          "optional": false,
          "computed": false,
          "start": 66,
          "end": 77
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bytes",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 83
          }
        ],
        "optional": false,
        "start": 66,
        "end": 84
      },
      "directive": null,
      "start": 66,
      "end": 85
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
            "name": "socket",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 92
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "send",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 97
          },
          "optional": false,
          "computed": false,
          "start": 86,
          "end": 97
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 112
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 8,
                "raw": "8",
                "start": 113,
                "end": 114
              }
            ],
            "start": 98,
            "end": 115
          }
        ],
        "optional": false,
        "start": 86,
        "end": 116
      },
      "directive": null,
      "start": 86,
      "end": 117
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 117
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "socket",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "WebSocket",
    "start": 22,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 33,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 54,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "socket",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "send",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "socket",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "send",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 102,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  }
]
```
