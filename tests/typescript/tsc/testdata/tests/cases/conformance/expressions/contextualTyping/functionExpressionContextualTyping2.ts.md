__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 674,
                        "end": 680
                      },
                      "start": 672,
                      "end": 680
                    },
                    "start": 671,
                    "end": 680
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 685,
                        "end": 691
                      },
                      "start": 683,
                      "end": 691
                    },
                    "start": 682,
                    "end": 691
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 696,
                    "end": 702
                  },
                  "start": 693,
                  "end": 702
                },
                "start": 670,
                "end": 702
              },
              "start": 668,
              "end": 702
            },
            "start": 666,
            "end": 702
          },
          "init": null,
          "definite": false,
          "start": 666,
          "end": 702
        }
      ],
      "declare": false,
      "start": 662,
      "end": 702
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 720
                    },
                    "typeArguments": null,
                    "start": 711,
                    "end": 720
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 728,
                            "end": 734
                          },
                          "start": 726,
                          "end": 734
                        },
                        "start": 725,
                        "end": 734
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 739,
                            "end": 745
                          },
                          "start": 737,
                          "end": 745
                        },
                        "start": 736,
                        "end": 745
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 750,
                        "end": 756
                      },
                      "start": 747,
                      "end": 756
                    },
                    "start": 724,
                    "end": 756
                  }
                ],
                "start": 711,
                "end": 757
              },
              "start": 709,
              "end": 757
            },
            "start": 707,
            "end": 757
          },
          "init": null,
          "definite": false,
          "start": 707,
          "end": 757
        }
      ],
      "declare": false,
      "start": 703,
      "end": 758
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 759,
          "end": 761
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 765,
              "end": 768
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 773
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 787,
                  "end": 791
                },
                "start": 780,
                "end": 792
              }
            ],
            "start": 778,
            "end": 794
          },
          "id": null,
          "generator": false,
          "start": 764,
          "end": 794
        },
        "start": 759,
        "end": 794
      },
      "directive": null,
      "start": 759,
      "end": 794
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 662,
  "end": 804
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 662,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 674,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 685,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 693,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 696,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 703,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 707,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 711,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 728,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 739,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 747,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 765,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 770,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 775,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 780,
    "end": 786
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 787,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  }
]
```
