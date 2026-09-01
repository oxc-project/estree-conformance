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
            "name": "basic",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 17
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 25
              },
              "optional": false,
              "computed": false,
              "start": 14,
              "end": 25
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 27,
                    "end": 28
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 30,
                    "end": 31
                  },
                  {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 33,
                    "end": 34
                  }
                ],
                "start": 26,
                "end": 35
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 46,
                      "end": 47
                    },
                    "start": 42,
                    "end": 47
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "small",
                    "raw": "'small'",
                    "start": 50,
                    "end": 57
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "large",
                    "raw": "'large'",
                    "start": 60,
                    "end": 67
                  },
                  "start": 42,
                  "end": 67
                },
                "id": null,
                "generator": false,
                "start": 37,
                "end": 67
              }
            ],
            "optional": false,
            "start": 14,
            "end": 68
          },
          "definite": false,
          "start": 6,
          "end": 68
        }
      ],
      "declare": false,
      "start": 0,
      "end": 69
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
            "name": "chars",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 82
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 88
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 96
              },
              "optional": false,
              "computed": false,
              "start": 85,
              "end": 96
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a string",
                "raw": "'a string'",
                "start": 97,
                "end": 107
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 110
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 115
                },
                "id": null,
                "generator": false,
                "start": 109,
                "end": 115
              }
            ],
            "optional": false,
            "start": 85,
            "end": 116
          },
          "definite": false,
          "start": 77,
          "end": 116
        }
      ],
      "declare": false,
      "start": 71,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Employee",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 132
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 150
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "role",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "ic",
                      "raw": "'ic'",
                      "start": 157,
                      "end": 161
                    },
                    "start": 157,
                    "end": 161
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "manager",
                      "raw": "'manager'",
                      "start": 164,
                      "end": 173
                    },
                    "start": 164,
                    "end": 173
                  }
                ],
                "start": 157,
                "end": 173
              },
              "start": 155,
              "end": 173
            },
            "accessibility": null,
            "static": false,
            "start": 151,
            "end": 173
          }
        ],
        "start": 135,
        "end": 175
      },
      "declare": false,
      "start": 119,
      "end": 175
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
            "name": "employees",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 196
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Employee",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 205
                      },
                      "typeArguments": null,
                      "start": 197,
                      "end": 205
                    }
                  ],
                  "start": 196,
                  "end": 206
                },
                "start": 193,
                "end": 206
              },
              "start": 191,
              "end": 206
            },
            "start": 182,
            "end": 206
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 216
            },
            "typeArguments": null,
            "arguments": [],
            "start": 209,
            "end": 218
          },
          "definite": false,
          "start": 182,
          "end": 218
        }
      ],
      "declare": false,
      "start": 176,
      "end": 219
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
            "name": "byRole",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 232
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 238
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 246
              },
              "optional": false,
              "computed": false,
              "start": 235,
              "end": 246
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "employees",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 256
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 259
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 264
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "role",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 265,
                    "end": 269
                  },
                  "optional": false,
                  "computed": false,
                  "start": 263,
                  "end": 269
                },
                "id": null,
                "generator": false,
                "start": 258,
                "end": 269
              }
            ],
            "optional": false,
            "start": 235,
            "end": 270
          },
          "definite": false,
          "start": 226,
          "end": 270
        }
      ],
      "declare": false,
      "start": 220,
      "end": 271
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
            "name": "byNonKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 287
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 293
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 301
              },
              "optional": false,
              "computed": false,
              "start": 290,
              "end": 301
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "employees",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 311
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 314
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 319
                },
                "id": null,
                "generator": false,
                "start": 313,
                "end": 319
              }
            ],
            "optional": false,
            "start": 290,
            "end": 320
          },
          "definite": false,
          "start": 279,
          "end": 320
        }
      ],
      "declare": false,
      "start": 273,
      "end": 321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 321
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
    "value": "basic",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "groupBy",
    "start": 18,
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
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 39,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "'small'",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "String",
    "value": "'large'",
    "start": 60,
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
    "type": "Keyword",
    "value": "const",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 77,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "groupBy",
    "start": 89,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "'a string'",
    "start": 97,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 111,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "c",
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
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 119,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Employee",
    "start": 124,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "role",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "String",
    "value": "'ic'",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 162,
    "end": 163
  },
  {
    "type": "String",
    "value": "'manager'",
    "start": 164,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "employees",
    "start": 182,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Employee",
    "start": 197,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "byRole",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "groupBy",
    "start": 239,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "employees",
    "start": 247,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 260,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "role",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "byNonKey",
    "start": 279,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 290,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "groupBy",
    "start": 294,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "employees",
    "start": 302,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 315,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  }
]
```
