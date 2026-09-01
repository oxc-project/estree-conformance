__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
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
              "start": 27,
              "end": 31
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 33,
                  "end": 36
                },
                "start": 33,
                "end": 38
              },
              "start": 31,
              "end": 38
            },
            "value": null,
            "start": 24,
            "end": 38
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 43,
            "end": 45
          },
          "start": 40,
          "end": 45
        },
        "start": 19,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 46
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
            "name": "Mixin1",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 60
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 74,
                      "end": 85
                    },
                    "typeArguments": null,
                    "start": 74,
                    "end": 85
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 64,
                  "end": 85
                }
              ],
              "start": 63,
              "end": 86
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 94
                    },
                    "typeArguments": null,
                    "start": 93,
                    "end": 94
                  },
                  "start": 91,
                  "end": 94
                },
                "start": 87,
                "end": 94
              }
            ],
            "returnType": null,
            "body": {
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
                "start": 113,
                "end": 117
              },
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
                      "name": "_fooPrivate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 139
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 141,
                        "end": 143
                      },
                      "start": 139,
                      "end": 143
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 120,
                    "end": 144
                  }
                ],
                "start": 118,
                "end": 146
              },
              "abstract": false,
              "declare": false,
              "start": 99,
              "end": 146
            },
            "id": null,
            "generator": false,
            "start": 63,
            "end": 146
          },
          "definite": false,
          "start": 54,
          "end": 146
        }
      ],
      "declare": false,
      "start": 48,
      "end": 146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 167
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mixin1",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 183
          },
          "typeArguments": null,
          "start": 170,
          "end": 183
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
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
                    "name": "Constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 207
                  },
                  "typeArguments": null,
                  "start": 196,
                  "end": 207
                },
                "start": 194,
                "end": 207
              },
              "start": 193,
              "end": 207
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
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 221
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 218,
                "end": 221
              },
              "start": 212,
              "end": 221
            },
            "start": 209,
            "end": 221
          },
          "start": 192,
          "end": 221
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 227
          },
          "typeArguments": null,
          "start": 224,
          "end": 227
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 230,
          "end": 235
        },
        "start": 170,
        "end": 235
      },
      "declare": false,
      "start": 148,
      "end": 236
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
            "name": "Mixin2",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 249
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 254
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FooConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 277
                    },
                    "typeArguments": null,
                    "start": 263,
                    "end": 277
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 253,
                  "end": 277
                }
              ],
              "start": 252,
              "end": 278
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 286
                    },
                    "typeArguments": null,
                    "start": 285,
                    "end": 286
                  },
                  "start": 283,
                  "end": 286
                },
                "start": 279,
                "end": 286
              }
            ],
            "returnType": null,
            "body": {
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
                "start": 305,
                "end": 309
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 310,
                "end": 312
              },
              "abstract": false,
              "declare": false,
              "start": 291,
              "end": 312
            },
            "id": null,
            "generator": false,
            "start": 252,
            "end": 312
          },
          "definite": false,
          "start": 243,
          "end": 312
        }
      ],
      "declare": false,
      "start": 237,
      "end": 313
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 322
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin2",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 337
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixin1",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 344
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 351
              }
            ],
            "optional": false,
            "start": 338,
            "end": 352
          }
        ],
        "optional": false,
        "start": 331,
        "end": 353
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 354,
        "end": 356
      },
      "abstract": false,
      "declare": false,
      "start": 315,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 356
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 5,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 24,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "Mixin1",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 66,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 74,
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
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 96,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 99,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 105,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 120,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "_fooPrivate",
    "start": 128,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 148,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "FooConstructor",
    "start": 153,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 170,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Mixin1",
    "start": 177,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 184,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 196,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 209,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 237,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Mixin2",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 255,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "FooConstructor",
    "start": 263,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 288,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 291,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 297,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 315,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 323,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "Mixin2",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Mixin1",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  }
]
```
