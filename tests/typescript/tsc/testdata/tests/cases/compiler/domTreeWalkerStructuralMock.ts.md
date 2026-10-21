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
        "name": "Walker",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 20
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "TreeWalker",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 42
          },
          "typeArguments": null,
          "start": 32,
          "end": 42
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "currentNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 66
                },
                "typeArguments": null,
                "start": 62,
                "end": 66
              },
              "start": 60,
              "end": 66
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
            "start": 49,
            "end": 67
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 87
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
                      "name": "NodeFilter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 99
                    },
                    "typeArguments": null,
                    "start": 89,
                    "end": 99
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 102,
                    "end": 106
                  }
                ],
                "start": 89,
                "end": 106
              },
              "start": 87,
              "end": 106
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 72,
            "end": 107
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "root",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 131
                },
                "typeArguments": null,
                "start": 127,
                "end": 131
              },
              "start": 125,
              "end": 131
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 112,
            "end": 132
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "whatToShow",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 137,
            "end": 165
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "firstChild",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 180
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 188
                      },
                      "typeArguments": null,
                      "start": 184,
                      "end": 188
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 191,
                      "end": 195
                    }
                  ],
                  "start": 184,
                  "end": 195
                },
                "start": 182,
                "end": 195
              },
              "body": null,
              "expression": false,
              "start": 180,
              "end": 196
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 170,
            "end": 196
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lastChild",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 210
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 214,
                        "end": 218
                      },
                      "typeArguments": null,
                      "start": 214,
                      "end": 218
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 221,
                      "end": 225
                    }
                  ],
                  "start": 214,
                  "end": 225
                },
                "start": 212,
                "end": 225
              },
              "body": null,
              "expression": false,
              "start": 210,
              "end": 226
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 201,
            "end": 226
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nextNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 239
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 243,
                        "end": 247
                      },
                      "typeArguments": null,
                      "start": 243,
                      "end": 247
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 250,
                      "end": 254
                    }
                  ],
                  "start": 243,
                  "end": 254
                },
                "start": 241,
                "end": 254
              },
              "body": null,
              "expression": false,
              "start": 239,
              "end": 255
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 231,
            "end": 255
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nextSibling",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 271
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 279
                      },
                      "typeArguments": null,
                      "start": 275,
                      "end": 279
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 282,
                      "end": 286
                    }
                  ],
                  "start": 275,
                  "end": 286
                },
                "start": 273,
                "end": 286
              },
              "body": null,
              "expression": false,
              "start": 271,
              "end": 287
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 260,
            "end": 287
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parentNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 302
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 306,
                      "end": 310
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 313,
                      "end": 317
                    }
                  ],
                  "start": 306,
                  "end": 317
                },
                "start": 304,
                "end": 317
              },
              "body": null,
              "expression": false,
              "start": 302,
              "end": 318
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 292,
            "end": 318
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "previousNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 335
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 339,
                        "end": 343
                      },
                      "typeArguments": null,
                      "start": 339,
                      "end": 343
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 346,
                      "end": 350
                    }
                  ],
                  "start": 339,
                  "end": 350
                },
                "start": 337,
                "end": 350
              },
              "body": null,
              "expression": false,
              "start": 335,
              "end": 351
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 323,
            "end": 351
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "previousSibling",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 371
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 375,
                        "end": 379
                      },
                      "typeArguments": null,
                      "start": 375,
                      "end": 379
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 382,
                      "end": 386
                    }
                  ],
                  "start": 375,
                  "end": 386
                },
                "start": 373,
                "end": 386
              },
              "body": null,
              "expression": false,
              "start": 371,
              "end": 387
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 356,
            "end": 387
          }
        ],
        "start": 43,
        "end": 389
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 389
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
            "name": "walker",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Walker",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 419
                },
                "typeArguments": null,
                "start": 413,
                "end": 419
              },
              "start": 411,
              "end": 419
            },
            "start": 405,
            "end": 419
          },
          "init": null,
          "definite": false,
          "start": 405,
          "end": 419
        }
      ],
      "declare": true,
      "start": 391,
      "end": 420
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TreeWalker",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 445
                },
                "typeArguments": null,
                "start": 435,
                "end": 445
              },
              "start": 433,
              "end": 445
            },
            "start": 427,
            "end": 445
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "walker",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 454
          },
          "definite": false,
          "start": 427,
          "end": 454
        }
      ],
      "declare": false,
      "start": 421,
      "end": 455
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 455
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
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Walker",
    "start": 14,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 21,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "TreeWalker",
    "start": 32,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "currentNode",
    "start": 49,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 72,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "NodeFilter",
    "start": 89,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 100,
    "end": 101
  },
  {
    "type": "Null",
    "value": "null",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 112,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 137,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "whatToShow",
    "start": 146,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "firstChild",
    "start": 170,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 189,
    "end": 190
  },
  {
    "type": "Null",
    "value": "null",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "lastChild",
    "start": 201,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 219,
    "end": 220
  },
  {
    "type": "Null",
    "value": "null",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "nextNode",
    "start": 231,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 248,
    "end": 249
  },
  {
    "type": "Null",
    "value": "null",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "nextSibling",
    "start": 260,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Node",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 280,
    "end": 281
  },
  {
    "type": "Null",
    "value": "null",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "parentNode",
    "start": 292,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 311,
    "end": 312
  },
  {
    "type": "Null",
    "value": "null",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "previousNode",
    "start": 323,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 344,
    "end": 345
  },
  {
    "type": "Null",
    "value": "null",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "previousSibling",
    "start": 356,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 380,
    "end": 381
  },
  {
    "type": "Null",
    "value": "null",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 391,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 399,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "walker",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "Walker",
    "start": 413,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 421,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "TreeWalker",
    "start": 435,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "walker",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  }
]
```
