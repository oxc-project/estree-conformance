__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 44
          }
        ],
        "start": 15,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identical",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 66
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 89,
                "end": 95
              },
              "start": 87,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 73,
            "end": 96
          }
        ],
        "start": 67,
        "end": 98
      },
      "declare": false,
      "start": 47,
      "end": 98
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mutable",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 116
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 123,
            "end": 137
          }
        ],
        "start": 117,
        "end": 139
      },
      "declare": false,
      "start": 99,
      "end": 139
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DifferentType",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 163
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 184
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 186,
                "end": 192
              },
              "start": 184,
              "end": 192
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 193
          }
        ],
        "start": 164,
        "end": 195
      },
      "declare": false,
      "start": 140,
      "end": 195
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DifferentName",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 219
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
              },
              "start": 240,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 226,
            "end": 249
          }
        ],
        "start": 220,
        "end": 251
      },
      "declare": false,
      "start": 196,
      "end": 251
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 274
                },
                "typeArguments": null,
                "start": 270,
                "end": 274
              },
              "start": 268,
              "end": 274
            },
            "start": 264,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 264,
          "end": 274
        }
      ],
      "declare": true,
      "start": 252,
      "end": 275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 280
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 286
          },
          "optional": false,
          "computed": false,
          "start": 276,
          "end": 286
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 289,
          "end": 291
        },
        "start": 276,
        "end": 291
      },
      "directive": null,
      "start": 276,
      "end": 291
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "identical",
            "optional": false,
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
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 362
                    },
                    "typeArguments": null,
                    "start": 358,
                    "end": 362
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Identical",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 374
                    },
                    "typeArguments": null,
                    "start": 365,
                    "end": 374
                  }
                ],
                "start": 358,
                "end": 374
              },
              "start": 356,
              "end": 374
            },
            "start": 347,
            "end": 374
          },
          "init": null,
          "definite": false,
          "start": 347,
          "end": 374
        }
      ],
      "declare": true,
      "start": 335,
      "end": 375
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "identical",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 385
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 391
          },
          "optional": false,
          "computed": false,
          "start": 376,
          "end": 391
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 394,
          "end": 396
        },
        "start": 376,
        "end": 396
      },
      "directive": null,
      "start": 376,
      "end": 397
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mutable",
            "optional": false,
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
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 466
                    },
                    "typeArguments": null,
                    "start": 462,
                    "end": 466
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Mutable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 476
                    },
                    "typeArguments": null,
                    "start": 469,
                    "end": 476
                  }
                ],
                "start": 462,
                "end": 476
              },
              "start": 460,
              "end": 476
            },
            "start": 453,
            "end": 476
          },
          "init": null,
          "definite": false,
          "start": 453,
          "end": 476
        }
      ],
      "declare": true,
      "start": 441,
      "end": 477
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mutable",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 485
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 491
          },
          "optional": false,
          "computed": false,
          "start": 478,
          "end": 491
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 494,
          "end": 496
        },
        "start": 478,
        "end": 496
      },
      "directive": null,
      "start": 478,
      "end": 497
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "differentType",
            "optional": false,
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
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 568,
                      "end": 572
                    },
                    "typeArguments": null,
                    "start": 568,
                    "end": 572
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DifferentType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 575,
                      "end": 588
                    },
                    "typeArguments": null,
                    "start": 575,
                    "end": 588
                  }
                ],
                "start": 568,
                "end": 588
              },
              "start": 566,
              "end": 588
            },
            "start": 553,
            "end": 588
          },
          "init": null,
          "definite": false,
          "start": 553,
          "end": 588
        }
      ],
      "declare": true,
      "start": 541,
      "end": 589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "differentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 603
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 604,
            "end": 609
          },
          "optional": false,
          "computed": false,
          "start": 590,
          "end": 609
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 612,
          "end": 614
        },
        "start": 590,
        "end": 614
      },
      "directive": null,
      "start": 590,
      "end": 615
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "differentName",
            "optional": false,
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
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 686,
                      "end": 690
                    },
                    "typeArguments": null,
                    "start": 686,
                    "end": 690
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DifferentName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 706
                    },
                    "typeArguments": null,
                    "start": 693,
                    "end": 706
                  }
                ],
                "start": 686,
                "end": 706
              },
              "start": 684,
              "end": 706
            },
            "start": 671,
            "end": 706
          },
          "init": null,
          "definite": false,
          "start": 671,
          "end": 706
        }
      ],
      "declare": true,
      "start": 659,
      "end": 707
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "differentName",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 721
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 727
          },
          "optional": false,
          "computed": false,
          "start": 708,
          "end": 727
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 730,
          "end": 732
        },
        "start": 708,
        "end": 732
      },
      "directive": null,
      "start": 708,
      "end": 733
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 775
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 21,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 30,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 47,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Identical",
    "start": 57,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 73,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 82,
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
    "value": "number",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 99,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Mutable",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 140,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "DifferentType",
    "start": 150,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 196,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "DifferentName",
    "start": 206,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 226,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 252,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 264,
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
    "value": "Base",
    "start": 270,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 281,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 289,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 335,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "identical",
    "start": 347,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "Identical",
    "start": 365,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "identical",
    "start": 376,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 441,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "mutable",
    "start": 453,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "Mutable",
    "start": 469,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "mutable",
    "start": 478,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 541,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 549,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "differentType",
    "start": 553,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "DifferentType",
    "start": 575,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "differentType",
    "start": 590,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 604,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 659,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "differentName",
    "start": 671,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "DifferentName",
    "start": 693,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "differentName",
    "start": 708,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 722,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 730,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  }
]
```
