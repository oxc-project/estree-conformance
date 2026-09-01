__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 22
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 25,
              "end": 28
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 28
          }
        ],
        "start": 11,
        "end": 29
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createdAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 58
                },
                "typeArguments": null,
                "start": 54,
                "end": 58
              },
              "start": 52,
              "end": 58
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 36,
            "end": 59
          }
        ],
        "start": 30,
        "end": 61
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ModelAttributes",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 83
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 85
          }
        ],
        "start": 83,
        "end": 86
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 93
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 95
              },
              "typeArguments": null,
              "start": 94,
              "end": 95
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Model",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 108
                },
                "typeArguments": null,
                "start": 103,
                "end": 108
              },
              "start": 97,
              "end": 108
            }
          ],
          "start": 93,
          "end": 109
        },
        "start": 89,
        "end": 109
      },
      "declare": false,
      "start": 63,
      "end": 110
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AutoModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 127
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 128,
            "end": 129
          }
        ],
        "start": 127,
        "end": 130
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 144
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ModelAttributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 160
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "typeArguments": null,
                  "start": 161,
                  "end": 162
                }
              ],
              "start": 160,
              "end": 163
            },
            "start": 145,
            "end": 163
          }
        ],
        "start": 144,
        "end": 164
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 165,
        "end": 167
      },
      "abstract": false,
      "declare": false,
      "start": 112,
      "end": 167
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PersonModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 186
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "AutoModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 204
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PersonModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 216
            },
            "typeArguments": null,
            "start": 205,
            "end": 216
          }
        ],
        "start": 204,
        "end": 217
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 234
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 236,
                "end": 242
              },
              "start": 234,
              "end": 242
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 224,
            "end": 243
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toJson",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 255
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSThisType",
                                "start": 281,
                                "end": 285
                              },
                              "start": 275,
                              "end": 285
                            },
                            "start": 273,
                            "end": 285
                          },
                          "start": 272,
                          "end": 285
                        },
                        "init": {
                          "type": "Literal",
                          "value": "createdAt",
                          "raw": "'createdAt'",
                          "start": 288,
                          "end": 299
                        },
                        "definite": false,
                        "start": 272,
                        "end": 299
                      }
                    ],
                    "declare": false,
                    "start": 268,
                    "end": 300
                  }
                ],
                "start": 258,
                "end": 306
              },
              "expression": false,
              "start": 255,
              "end": 306
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 249,
            "end": 306
          }
        ],
        "start": 218,
        "end": 308
      },
      "abstract": false,
      "declare": false,
      "start": 169,
      "end": 308
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 308
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 12,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 36,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "createdAt",
    "start": 43,
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
    "value": "Date",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 63,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "ModelAttributes",
    "start": 68,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
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
    "value": "class",
    "start": 112,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "AutoModel",
    "start": 118,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "ModelAttributes",
    "start": 145,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 169,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "PersonModel",
    "start": 175,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 187,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "AutoModel",
    "start": 195,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "PersonModel",
    "start": 205,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 224,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "toJson",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 275,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "String",
    "value": "'createdAt'",
    "start": 288,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  }
]
```
