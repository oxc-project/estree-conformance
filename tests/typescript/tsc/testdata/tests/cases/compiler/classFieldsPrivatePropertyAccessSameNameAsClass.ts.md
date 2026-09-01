__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 18
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 28
              },
              "initializer": {
                "type": "Literal",
                "value": "FooValue",
                "raw": "\"FooValue\"",
                "start": 31,
                "end": 41
              },
              "computed": false,
              "start": 25,
              "end": 41
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 50
              },
              "initializer": {
                "type": "Literal",
                "value": "BarValue",
                "raw": "\"BarValue\"",
                "start": 53,
                "end": 63
              },
              "computed": false,
              "start": 47,
              "end": 63
            }
          ],
          "start": 19,
          "end": 66
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 231
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
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "private",
                "start": 238,
                "end": 246
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 249,
                "end": 250
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 238,
              "end": 251
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "instance",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 271
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 281
                },
                "typeArguments": null,
                "arguments": [],
                "start": 274,
                "end": 283
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 256,
              "end": 284
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 293
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 301
                  },
                  "typeArguments": null,
                  "start": 295,
                  "end": 301
                },
                "start": 293,
                "end": 301
              },
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 310
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 314
                },
                "optional": false,
                "computed": false,
                "start": 304,
                "end": 314
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 289,
              "end": 315
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getType",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 328
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 338
                    },
                    "typeArguments": null,
                    "start": 332,
                    "end": 338
                  },
                  "start": 330,
                  "end": 338
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 356,
                            "end": 360
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 361,
                            "end": 365
                          },
                          "optional": false,
                          "computed": false,
                          "start": 356,
                          "end": 365
                        },
                        "operator": "||",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 369,
                            "end": 375
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 376,
                            "end": 379
                          },
                          "optional": false,
                          "computed": false,
                          "start": 369,
                          "end": 379
                        },
                        "start": 356,
                        "end": 379
                      },
                      "start": 349,
                      "end": 380
                    }
                  ],
                  "start": 339,
                  "end": 386
                },
                "expression": false,
                "start": 328,
                "end": 386
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 321,
              "end": 386
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 402
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 422,
                          "end": 426
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "private",
                          "start": 427,
                          "end": 435
                        },
                        "optional": false,
                        "computed": false,
                        "start": 422,
                        "end": 435
                      },
                      "start": 415,
                      "end": 436
                    }
                  ],
                  "start": 405,
                  "end": 442
                },
                "expression": false,
                "start": 402,
                "end": 442
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 392,
              "end": 442
            }
          ],
          "start": 232,
          "end": 444
        },
        "abstract": false,
        "declare": false,
        "start": 222,
        "end": 444
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 215,
      "end": 444
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 528,
                      "end": 531
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 533,
                        "end": 539
                      },
                      "start": 531,
                      "end": 539
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 528,
                    "end": 539
                  }
                ],
                "start": 526,
                "end": 541
              },
              "start": 524,
              "end": 541
            },
            "start": 521,
            "end": 541
          },
          "init": null,
          "definite": false,
          "start": 521,
          "end": 541
        }
      ],
      "declare": true,
      "start": 507,
      "end": 542
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 557,
          "end": 560
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
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "data",
                "start": 567,
                "end": 572
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 575,
                "end": 576
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 567,
              "end": 577
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ref",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 592
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 599,
                  "end": 602
                },
                "typeArguments": null,
                "arguments": [],
                "start": 595,
                "end": 604
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 582,
              "end": 605
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 617,
                "end": 621
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 627
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 631
                },
                "optional": false,
                "computed": false,
                "start": 624,
                "end": 631
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 610,
              "end": 632
            }
          ],
          "start": 561,
          "end": 634
        },
        "abstract": false,
        "declare": false,
        "start": 551,
        "end": 634
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 544,
      "end": 634
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "Baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 717,
                      "end": 720
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 722,
                        "end": 728
                      },
                      "start": 720,
                      "end": 728
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 717,
                    "end": 728
                  }
                ],
                "start": 715,
                "end": 730
              },
              "start": 713,
              "end": 730
            },
            "start": 709,
            "end": 730
          },
          "init": null,
          "definite": false,
          "start": 709,
          "end": 730
        }
      ],
      "declare": true,
      "start": 695,
      "end": 731
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
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 739,
            "end": 746
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 758
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
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "field",
                    "start": 765,
                    "end": 771
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 774,
                    "end": 775
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 765,
                  "end": 776
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 788,
                    "end": 796
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 803,
                      "end": 806
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 799,
                    "end": 808
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 781,
                  "end": 809
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 814,
                    "end": 818
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 821,
                      "end": 825
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 826,
                      "end": 829
                    },
                    "optional": false,
                    "computed": false,
                    "start": 821,
                    "end": 829
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 814,
                  "end": 830
                }
              ],
              "start": 759,
              "end": 832
            },
            "abstract": false,
            "declare": false,
            "start": 749,
            "end": 832
          },
          "definite": false,
          "start": 739,
          "end": 832
        }
      ],
      "declare": false,
      "start": 733,
      "end": 832
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 832
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 12,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"FooValue\"",
    "start": 31,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"BarValue\"",
    "start": 53,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 215,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "PrivateIdentifier",
    "value": "private",
    "start": 238,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 256,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 263,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "getType",
    "start": 321,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 349,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 366,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 369,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 376,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "getPrivate",
    "start": 392,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 415,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 422,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 426,
    "end": 427
  },
  {
    "type": "PrivateIdentifier",
    "value": "private",
    "start": 427,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 507,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 515,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 528,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 533,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 544,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 551,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 561,
    "end": 562
  },
  {
    "type": "PrivateIdentifier",
    "value": "data",
    "start": 567,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 582,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 595,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 599,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 610,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 617,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 628,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 695,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 703,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 709,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 717,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 733,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 739,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 749,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 755,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 765,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 781,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 788,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 799,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 803,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 814,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 826,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  }
]
```
