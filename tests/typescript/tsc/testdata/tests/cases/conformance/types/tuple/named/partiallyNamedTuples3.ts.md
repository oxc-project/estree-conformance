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
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 22,
                    "end": 28
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 30,
                      "end": 34
                    },
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 36,
                      "end": 42
                    },
                    "optional": false,
                    "start": 30,
                    "end": 42
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 44,
                    "end": 51
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 58
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "optional": false,
                    "start": 53,
                    "end": 66
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  }
                ],
                "start": 21,
                "end": 75
              },
              "start": 19,
              "end": 75
            },
            "start": 14,
            "end": 75
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 75
        }
      ],
      "declare": true,
      "start": 0,
      "end": 76
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
            "name": "output",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 90
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 102
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 95,
                  "end": 102
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 111
              },
              "id": null,
              "generator": false,
              "start": 94,
              "end": 111
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 121
                },
                "start": 113,
                "end": 121
              }
            ],
            "optional": false,
            "start": 93,
            "end": 122
          },
          "definite": false,
          "start": 84,
          "end": 122
        }
      ],
      "declare": false,
      "start": 78,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
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
    "value": "tuple",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 44,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 104,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  }
]
```
