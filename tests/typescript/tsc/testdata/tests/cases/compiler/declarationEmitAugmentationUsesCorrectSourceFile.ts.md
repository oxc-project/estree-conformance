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
        "name": "ShouldJustBeAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 510,
        "end": 525
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 529,
              "end": 532
            }
          ],
          "start": 528,
          "end": 533
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 534,
            "end": 535
          },
          "start": 534,
          "end": 535
        },
        "start": 528,
        "end": 536
      },
      "declare": false,
      "start": 505,
      "end": 537
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "knex",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 561
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Knex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 579
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Knex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 579
                },
                "exportKind": "value",
                "start": 575,
                "end": 579
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 566,
            "end": 582
          }
        ],
        "start": 562,
        "end": 584
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 539,
      "end": 584
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Knex",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 608
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Interface",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 632
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 645
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ShouldJustBeAny",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 649,
                        "end": 664
                      },
                      "typeArguments": null,
                      "start": 649,
                      "end": 664
                    },
                    "start": 647,
                    "end": 664
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 639,
                  "end": 665
                }
              ],
              "start": 633,
              "end": 669
            },
            "declare": false,
            "start": 613,
            "end": 669
          }
        ],
        "start": 609,
        "end": 671
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 586,
      "end": 671
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "knex",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 686
      },
      "start": 673,
      "end": 687
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 505,
  "end": 688
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 505,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "ShouldJustBeAny",
    "start": 510,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 533,
    "end": 534
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 539,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 547,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "knex",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 566,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "Knex",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 586,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 594,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "Knex",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 613,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "Interface",
    "start": 623,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 639,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "ShouldJustBeAny",
    "start": 649,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 673,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "knex",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "knex",
        "raw": "\"knex\"",
        "start": 7,
        "end": 13
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 14
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "knex",
        "raw": "\"knex\"",
        "start": 30,
        "end": 36
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Knex",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 55
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "newFunc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 78
                  },
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
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Knex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 82,
                          "end": 86
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Interface",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 96
                        },
                        "start": 82,
                        "end": 96
                      },
                      "typeArguments": null,
                      "start": 82,
                      "end": 96
                    },
                    "start": 80,
                    "end": 96
                  },
                  "body": null,
                  "expression": false,
                  "start": 62,
                  "end": 97
                }
              ],
              "start": 56,
              "end": 101
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 41,
            "end": 101
          }
        ],
        "start": 37,
        "end": 103
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 15,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 105
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"knex\"",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 15,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 23,
    "end": 29
  },
  {
    "type": "String",
    "value": "\"knex\"",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 41,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Knex",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "newFunc",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Knex",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Interface",
    "start": 87,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  }
]
```
