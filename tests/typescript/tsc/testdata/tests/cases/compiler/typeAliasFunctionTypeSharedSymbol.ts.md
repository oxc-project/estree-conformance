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
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 47
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 53
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                        "start": 71,
                        "end": 75
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 77,
                            "end": 80
                          },
                          "start": 77,
                          "end": 82
                        },
                        "start": 75,
                        "end": 82
                      },
                      "value": null,
                      "start": 68,
                      "end": 82
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 85,
                      "end": 87
                    },
                    "start": 83,
                    "end": 87
                  },
                  "start": 63,
                  "end": 87
                }
              ],
              "start": 62,
              "end": 88
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 48,
            "end": 88
          }
        ],
        "start": 47,
        "end": 89
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 101
              },
              "typeArguments": null,
              "start": 96,
              "end": 101
            },
            "start": 94,
            "end": 101
          },
          "start": 90,
          "end": 101
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 134
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 135,
                "end": 142
              },
              "abstract": false,
              "declare": false,
              "start": 116,
              "end": 142
            },
            "start": 109,
            "end": 143
          }
        ],
        "start": 103,
        "end": 145
      },
      "expression": false,
      "start": 33,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 157
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnTypeOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 172
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mixin",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 185
              },
              "typeArguments": null,
              "start": 173,
              "end": 185
            }
          ],
          "start": 172,
          "end": 186
        },
        "start": 160,
        "end": 186
      },
      "declare": false,
      "start": 147,
      "end": 186
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReturnTypeOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 205
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 206,
            "end": 207
          }
        ],
        "start": 205,
        "end": 208
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "typeArguments": null,
          "start": 211,
          "end": 212
        },
        "extendsType": {
          "type": "TSFunctionType",
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
                "start": 225,
                "end": 229
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 231,
                    "end": 234
                  },
                  "start": 231,
                  "end": 236
                },
                "start": 229,
                "end": 236
              },
              "value": null,
              "start": 222,
              "end": 236
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 246
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 245,
                "end": 246
              },
              "start": 239,
              "end": 246
            },
            "start": 237,
            "end": 246
          },
          "start": 221,
          "end": 246
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 250
          },
          "typeArguments": null,
          "start": 249,
          "end": 250
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 253,
          "end": 258
        },
        "start": 211,
        "end": 258
      },
      "declare": false,
      "start": 188,
      "end": 259
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Crashes",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 273
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 276,
            "end": 282
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "typeArguments": null,
            "start": 285,
            "end": 290
          }
        ],
        "start": 276,
        "end": 290
      },
      "declare": false,
      "start": 261,
      "end": 291
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 291
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 33,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "TBase",
    "start": 48,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 54,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "TBase",
    "start": 96,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 109,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 116,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 122,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 147,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeOf",
    "start": 160,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 173,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 188,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeOf",
    "start": 193,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 213,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 222,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 237,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 239,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 261,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "Crashes",
    "start": 266,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  }
]
```
