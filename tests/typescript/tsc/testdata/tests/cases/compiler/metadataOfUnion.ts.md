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
        "name": "PropDeco",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 17
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 32
              },
              "typeArguments": null,
              "start": 26,
              "end": 32
            },
            "start": 24,
            "end": 32
          },
          "start": 18,
          "end": 32
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "propKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 43,
                  "end": 49
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 52,
                  "end": 58
                }
              ],
              "start": 43,
              "end": 58
            },
            "start": 41,
            "end": 58
          },
          "start": 34,
          "end": 58
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 60,
        "end": 63
      },
      "expression": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 72
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 73,
        "end": 76
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 76
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 85
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 101
                },
                "start": 92,
                "end": 101
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
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
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 109,
                      "end": 114
                    },
                    "start": 109,
                    "end": 114
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 118
                    },
                    "typeArguments": null,
                    "start": 117,
                    "end": 118
                  }
                ],
                "start": 109,
                "end": 118
              },
              "start": 107,
              "end": 118
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 92,
            "end": 119
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 134
                },
                "start": 125,
                "end": 134
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
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
                      "value": true,
                      "raw": "true",
                      "start": 142,
                      "end": 146
                    },
                    "start": 142,
                    "end": 146
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 149,
                    "end": 156
                  }
                ],
                "start": 142,
                "end": 156
              },
              "start": 140,
              "end": 156
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 125,
            "end": 157
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 172
                },
                "start": 163,
                "end": 172
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
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
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 180,
                      "end": 185
                    },
                    "start": 180,
                    "end": 185
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 188,
                    "end": 195
                  }
                ],
                "start": 180,
                "end": 195
              },
              "start": 178,
              "end": 195
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 163,
            "end": 196
          }
        ],
        "start": 86,
        "end": 198
      },
      "abstract": false,
      "declare": false,
      "start": 78,
      "end": 198
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 206
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 214
            },
            "initializer": null,
            "computed": false,
            "start": 213,
            "end": 214
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 221
            },
            "initializer": null,
            "computed": false,
            "start": 220,
            "end": 221
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "initializer": null,
            "computed": false,
            "start": 227,
            "end": 228
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "initializer": null,
            "computed": false,
            "start": 234,
            "end": 235
          }
        ],
        "start": 207,
        "end": 237
      },
      "const": false,
      "declare": false,
      "start": 200,
      "end": 237
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 246
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 262
                },
                "start": 253,
                "end": 262
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 271
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 273
                  },
                  "start": 270,
                  "end": 273
                },
                "typeArguments": null,
                "start": 270,
                "end": 273
              },
              "start": 268,
              "end": 273
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 253,
            "end": 274
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 289
                },
                "start": 280,
                "end": 289
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 295
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 298
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 300
                      },
                      "start": 297,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 297,
                    "end": 300
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 303,
                        "end": 304
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 305,
                        "end": 306
                      },
                      "start": 303,
                      "end": 306
                    },
                    "typeArguments": null,
                    "start": 303,
                    "end": 306
                  }
                ],
                "start": 297,
                "end": 306
              },
              "start": 295,
              "end": 306
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 280,
            "end": 307
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 322
                },
                "start": 313,
                "end": 322
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 328
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 331
                },
                "typeArguments": null,
                "start": 330,
                "end": 331
              },
              "start": 328,
              "end": 331
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 313,
            "end": 332
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 347
                },
                "start": 338,
                "end": 347
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 355,
                      "end": 356
                    },
                    "typeArguments": null,
                    "start": 355,
                    "end": 356
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 359,
                    "end": 365
                  }
                ],
                "start": 355,
                "end": 365
              },
              "start": 353,
              "end": 365
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 338,
            "end": 366
          }
        ],
        "start": 247,
        "end": 368
      },
      "abstract": false,
      "declare": false,
      "start": 239,
      "end": 368
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 368
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
    "value": "PropDeco",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "propKey",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 78,
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
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 93,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 126,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 164,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 200,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 239,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 254,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 281,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 314,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "PropDeco",
    "start": 339,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  }
]
```
