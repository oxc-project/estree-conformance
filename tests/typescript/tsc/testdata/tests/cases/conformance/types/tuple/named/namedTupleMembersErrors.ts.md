__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Segment1",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 20
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 30
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              },
              "optional": false,
              "start": 24,
              "end": 38
            },
            {
              "type": "TSNumberKeyword",
              "start": 40,
              "end": 46
            }
          ],
          "start": 23,
          "end": 47
        },
        "declare": false,
        "start": 7,
        "end": 48
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 48
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Segment2",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 69
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 73,
              "end": 79
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "size",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 85
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 87,
                "end": 93
              },
              "optional": false,
              "start": 81,
              "end": 93
            }
          ],
          "start": 72,
          "end": 94
        },
        "declare": false,
        "start": 56,
        "end": 95
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 49,
      "end": 95
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "List",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 113
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 121
              },
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 123,
                "end": 126
              },
              "optional": false,
              "start": 117,
              "end": 126
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 131,
                "end": 134
              },
              "start": 128,
              "end": 134
            }
          ],
          "start": 116,
          "end": 135
        },
        "declare": false,
        "start": 104,
        "end": 136
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 97,
      "end": 136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "List2",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 155
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 159,
              "end": 162
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "remainder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 176
                },
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 178,
                  "end": 181
                },
                "optional": false,
                "start": 167,
                "end": 181
              },
              "start": 164,
              "end": 181
            }
          ],
          "start": 158,
          "end": 182
        },
        "declare": false,
        "start": 145,
        "end": 183
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 138,
      "end": 183
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pair",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 202
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 210
              },
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 212,
                "end": 215
              },
              "optional": false,
              "start": 206,
              "end": 215
            },
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 217,
                "end": 220
              },
              "start": 217,
              "end": 221
            }
          ],
          "start": 205,
          "end": 222
        },
        "declare": false,
        "start": 193,
        "end": 223
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 186,
      "end": 223
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pair2",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 242
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 246,
              "end": 249
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 255
              },
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 258,
                "end": 261
              },
              "optional": true,
              "start": 251,
              "end": 261
            }
          ],
          "start": 245,
          "end": 262
        },
        "declare": false,
        "start": 232,
        "end": 263
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 225,
      "end": 263
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Opt",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 281
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 292
              },
              "elementType": {
                "type": "TSOptionalType",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 294,
                  "end": 300
                },
                "start": 294,
                "end": 301
              },
              "optional": false,
              "start": 285,
              "end": 301
            }
          ],
          "start": 284,
          "end": 302
        },
        "declare": false,
        "start": 273,
        "end": 303
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 266,
      "end": 303
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trailing",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 364
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 373
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 375,
                "end": 381
              },
              "optional": false,
              "start": 368,
              "end": 381
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 387
              },
              "elementType": {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 392,
                    "end": 398
                  },
                  "start": 392,
                  "end": 400
                },
                "start": 389,
                "end": 400
              },
              "optional": false,
              "start": 383,
              "end": 400
            }
          ],
          "start": 367,
          "end": 401
        },
        "declare": false,
        "start": 351,
        "end": 402
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 344,
      "end": 402
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptTrailing",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 457
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 466
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 468,
                "end": 474
              },
              "optional": false,
              "start": 461,
              "end": 474
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 480
              },
              "elementType": {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 485,
                        "end": 491
                      },
                      "start": 485,
                      "end": 493
                    },
                    "start": 484,
                    "end": 493
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 485,
                  "end": 494
                },
                "start": 482,
                "end": 494
              },
              "optional": false,
              "start": 476,
              "end": 494
            }
          ],
          "start": 460,
          "end": 495
        },
        "declare": false,
        "start": 441,
        "end": 496
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 434,
      "end": 496
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 549,
          "end": 556
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 565
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 567,
                "end": 573
              },
              "optional": false,
              "start": 560,
              "end": 573
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 582
                },
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 585,
                    "end": 591
                  },
                  "start": 585,
                  "end": 593
                },
                "optional": true,
                "start": 578,
                "end": 593
              },
              "start": 575,
              "end": 593
            }
          ],
          "start": 559,
          "end": 594
        },
        "declare": false,
        "start": 544,
        "end": 595
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 537,
      "end": 595
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonArrayRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 637,
          "end": 649
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 653,
                "end": 658
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 660,
                "end": 666
              },
              "optional": false,
              "start": 653,
              "end": 666
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 675
                },
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 677,
                  "end": 683
                },
                "optional": false,
                "start": 671,
                "end": 683
              },
              "start": 668,
              "end": 683
            }
          ],
          "start": 652,
          "end": 684
        },
        "declare": false,
        "start": 632,
        "end": 685
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 625,
      "end": 685
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecusiveRestUnlabeled",
          "optional": false,
          "typeAnnotation": null,
          "start": 733,
          "end": 754
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 758,
              "end": 764
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecusiveRestUnlabeled",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 790
                },
                "typeArguments": null,
                "start": 769,
                "end": 790
              },
              "start": 766,
              "end": 790
            }
          ],
          "start": 757,
          "end": 791
        },
        "declare": false,
        "start": 728,
        "end": 792
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 721,
      "end": 792
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecusiveRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 805,
          "end": 817
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 821,
                "end": 826
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 828,
                "end": 834
              },
              "optional": false,
              "start": 821,
              "end": 834
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 839,
                  "end": 843
                },
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RecusiveRest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 845,
                    "end": 857
                  },
                  "typeArguments": null,
                  "start": 845,
                  "end": 857
                },
                "optional": false,
                "start": 839,
                "end": 857
              },
              "start": 836,
              "end": 857
            }
          ],
          "start": 820,
          "end": 858
        },
        "declare": false,
        "start": 800,
        "end": 859
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 793,
      "end": 859
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 897
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
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Segment1",
    "start": 12,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 49,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 56,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Segment2",
    "start": 61,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 97,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 104,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 138,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 145,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "List2",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 164,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "remainder",
    "start": 167,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 186,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 193,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Pair",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 225,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 232,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Pair2",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "last",
    "start": 251,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 266,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 273,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Opt",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 344,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 351,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "Trailing",
    "start": 356,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 368,
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
    "value": "string",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 389,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 434,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 441,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "OptTrailing",
    "start": 446,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 461,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 468,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 476,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 482,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 537,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 544,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "OptRest",
    "start": 549,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 560,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 567,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 575,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 625,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 632,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "NonArrayRest",
    "start": 637,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 653,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 660,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 668,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 677,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 721,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 728,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "RecusiveRestUnlabeled",
    "start": 733,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 758,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 766,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "RecusiveRestUnlabeled",
    "start": 769,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 793,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 800,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "RecusiveRest",
    "start": 805,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 821,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 828,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 836,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 839,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "RecusiveRest",
    "start": 845,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859
  }
]
```
