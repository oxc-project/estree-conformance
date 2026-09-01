__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 60
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "typeArguments": null,
              "start": 72,
              "end": 73
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 62,
            "end": 73
          }
        ],
        "start": 43,
        "end": 74
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "typeArguments": null,
              "start": 78,
              "end": 79
            },
            "start": 76,
            "end": 79
          },
          "start": 75,
          "end": 79
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 85
                },
                "typeArguments": null,
                "start": 84,
                "end": 85
              },
              "start": 84,
              "end": 87
            },
            "start": 82,
            "end": 87
          },
          "start": 81,
          "end": 87
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 96
                      },
                      "typeArguments": null,
                      "start": 95,
                      "end": 96
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 100
                      },
                      "typeArguments": null,
                      "start": 99,
                      "end": 100
                    }
                  ],
                  "start": 95,
                  "end": 100
                },
                "start": 93,
                "end": 100
              },
              "start": 91,
              "end": 100
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 105,
              "end": 109
            },
            "start": 102,
            "end": 109
          },
          "start": 90,
          "end": 109
        },
        "start": 88,
        "end": 109
      },
      "body": null,
      "expression": false,
      "start": 22,
      "end": 110
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 118
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 126,
                  "end": 129
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 133,
                        "end": 136
                      },
                      "start": 133,
                      "end": 136
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "y",
                        "raw": "\"y\"",
                        "start": 139,
                        "end": 142
                      },
                      "start": 139,
                      "end": 142
                    }
                  ],
                  "start": 133,
                  "end": 142
                },
                "start": 126,
                "end": 142
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 145,
                    "end": 148
                  }
                ],
                "start": 144,
                "end": 149
              }
            ],
            "optional": false,
            "start": 121,
            "end": 150
          },
          "definite": false,
          "start": 117,
          "end": 150
        }
      ],
      "declare": false,
      "start": 111,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 153
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 154,
            "end": 157
          }
        ],
        "optional": false,
        "start": 152,
        "end": 158
      },
      "directive": null,
      "start": 152,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 159
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 30,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 46,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 64,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 102,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 130,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 137,
    "end": 138
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 144,
    "end": 145
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  }
]
```
