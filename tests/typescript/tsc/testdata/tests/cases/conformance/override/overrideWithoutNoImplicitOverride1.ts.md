__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AmbientClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 33
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "yadda",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 54
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
                    "type": "TSVoidKeyword",
                    "start": 58,
                    "end": 62
                  },
                  "start": 56,
                  "end": 62
                },
                "body": null,
                "expression": false,
                "start": 54,
                "end": 63
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 40,
              "end": 63
            }
          ],
          "start": 34,
          "end": 65
        },
        "abstract": false,
        "declare": true,
        "start": 7,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 65
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonAmbientClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 95
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "yadda",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 116
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
                    "type": "TSVoidKeyword",
                    "start": 120,
                    "end": 124
                  },
                  "start": 118,
                  "end": 124
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 125,
                  "end": 127
                },
                "expression": false,
                "start": 116,
                "end": 127
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 102,
              "end": 127
            }
          ],
          "start": 96,
          "end": 129
        },
        "abstract": false,
        "declare": false,
        "start": 74,
        "end": 129
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 67,
      "end": 129
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AmbientBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 170
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
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
                    "type": "TSVoidKeyword",
                    "start": 184,
                    "end": 188
                  },
                  "start": 182,
                  "end": 188
                },
                "body": null,
                "expression": false,
                "start": 180,
                "end": 189
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 177,
              "end": 189
            }
          ],
          "start": 171,
          "end": 191
        },
        "abstract": false,
        "declare": true,
        "start": 145,
        "end": 191
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 138,
      "end": 191
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AmbientDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 228
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "AmbientBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 248
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 258
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
                    "type": "TSVoidKeyword",
                    "start": 262,
                    "end": 266
                  },
                  "start": 260,
                  "end": 266
                },
                "body": null,
                "expression": false,
                "start": 258,
                "end": 267
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 255,
              "end": 267
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 285
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
                    "type": "TSVoidKeyword",
                    "start": 289,
                    "end": 293
                  },
                  "start": 287,
                  "end": 293
                },
                "body": null,
                "expression": false,
                "start": 285,
                "end": 294
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 273,
              "end": 294
            }
          ],
          "start": 249,
          "end": 296
        },
        "abstract": false,
        "declare": true,
        "start": 200,
        "end": 296
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 193,
      "end": 296
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ambientNamespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 339
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AmbientBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 370
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 384
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
                          "type": "TSVoidKeyword",
                          "start": 388,
                          "end": 392
                        },
                        "start": 386,
                        "end": 392
                      },
                      "body": null,
                      "expression": false,
                      "start": 384,
                      "end": 393
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 381,
                    "end": 393
                  }
                ],
                "start": 371,
                "end": 399
              },
              "abstract": false,
              "declare": false,
              "start": 353,
              "end": 399
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 346,
            "end": 399
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AmbientDerived",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 432
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "AmbientBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 452
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 466
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
                          "type": "TSVoidKeyword",
                          "start": 470,
                          "end": 474
                        },
                        "start": 468,
                        "end": 474
                      },
                      "body": null,
                      "expression": false,
                      "start": 466,
                      "end": 475
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 463,
                    "end": 475
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 497
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
                          "type": "TSVoidKeyword",
                          "start": 501,
                          "end": 505
                        },
                        "start": 499,
                        "end": 505
                      },
                      "body": null,
                      "expression": false,
                      "start": 497,
                      "end": 506
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": true,
                    "optional": false,
                    "accessibility": null,
                    "start": 485,
                    "end": 506
                  }
                ],
                "start": 453,
                "end": 512
              },
              "abstract": false,
              "declare": false,
              "start": 412,
              "end": 512
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 405,
            "end": 512
          }
        ],
        "start": 340,
        "end": 514
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 305,
      "end": 514
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonAmbientBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 550
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 560
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
                    "type": "TSVoidKeyword",
                    "start": 564,
                    "end": 568
                  },
                  "start": 562,
                  "end": 568
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 569,
                  "end": 571
                },
                "expression": false,
                "start": 560,
                "end": 571
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 557,
              "end": 571
            }
          ],
          "start": 551,
          "end": 573
        },
        "abstract": false,
        "declare": false,
        "start": 530,
        "end": 573
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 523,
      "end": 573
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonAmbientDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 588,
          "end": 605
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonAmbientBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 614,
          "end": 628
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 638
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
                    "type": "TSVoidKeyword",
                    "start": 642,
                    "end": 646
                  },
                  "start": 640,
                  "end": 646
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 647,
                  "end": 649
                },
                "expression": false,
                "start": 638,
                "end": 649
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 635,
              "end": 649
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 664,
                "end": 667
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
                    "type": "TSVoidKeyword",
                    "start": 671,
                    "end": 675
                  },
                  "start": 669,
                  "end": 675
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 676,
                  "end": 678
                },
                "expression": false,
                "start": 667,
                "end": 678
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 655,
              "end": 678
            }
          ],
          "start": 629,
          "end": 680
        },
        "abstract": false,
        "declare": false,
        "start": 582,
        "end": 680
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 575,
      "end": 680
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 680
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
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "AmbientClass",
    "start": 21,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 40,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "yadda",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 74,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "NonAmbientClass",
    "start": 80,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 102,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "yadda",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 138,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 145,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "AmbientBase",
    "start": 159,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 177,
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
    "type": "Keyword",
    "value": "void",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 193,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 200,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 208,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "AmbientDerived",
    "start": 214,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 229,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "AmbientBase",
    "start": 237,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 262,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 273,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 305,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 313,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "ambientNamespace",
    "start": 323,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 346,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 353,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "AmbientBase",
    "start": 359,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 405,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 412,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "AmbientDerived",
    "start": 418,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 433,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "AmbientBase",
    "start": 441,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 485,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 501,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 523,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 530,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "NonAmbientBase",
    "start": 536,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 575,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 582,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "NonAmbientDerived",
    "start": 588,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 606,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "NonAmbientBase",
    "start": 614,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 642,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 655,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  }
]
```
