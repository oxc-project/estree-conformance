__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 42
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 53
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "element",
                          "raw": "'element'",
                          "start": 55,
                          "end": 64
                        },
                        "start": 55,
                        "end": 64
                      },
                      "start": 53,
                      "end": 64
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 49,
                    "end": 65
                  }
                ],
                "start": 43,
                "end": 69
              },
              "declare": false,
              "start": 25,
              "end": 69
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 69
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 101
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 112
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "element-class",
                          "raw": "'element-class'",
                          "start": 114,
                          "end": 129
                        },
                        "start": 114,
                        "end": 129
                      },
                      "start": 112,
                      "end": 129
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 108,
                    "end": 130
                  }
                ],
                "start": 102,
                "end": 134
              },
              "declare": false,
              "start": 79,
              "end": 134
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 72,
            "end": 134
          }
        ],
        "start": 14,
        "end": 136
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 164
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 165,
              "end": 166
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 175,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 181
          }
        ],
        "start": 164,
        "end": 182
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 188
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 188
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 184,
              "end": 188
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 196
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 200
                      },
                      "typeArguments": null,
                      "start": 199,
                      "end": 200
                    },
                    "start": 197,
                    "end": 200
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 192,
                  "end": 200
                }
              ],
              "start": 191,
              "end": 201
            },
            "start": 189,
            "end": 201
          },
          "start": 183,
          "end": 201
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 224
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 224
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 220,
                  "end": 224
                }
              ],
              "start": 214,
              "end": 228
            },
            "start": 207,
            "end": 228
          }
        ],
        "start": 203,
        "end": 230
      },
      "expression": false,
      "start": 138,
      "end": 230
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
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 248
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "useThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 256
          },
          "optional": false,
          "computed": false,
          "start": 231,
          "end": 256
        },
        "right": {
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
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "this",
                      "start": 282,
                      "end": 286
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "type",
                          "start": 287,
                          "end": 291
                        },
                        "value": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 292,
                          "end": 297
                        },
                        "start": 287,
                        "end": 297
                      }
                    ],
                    "selfClosing": true,
                    "start": 281,
                    "end": 300
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 281,
                  "end": 300
                },
                "start": 274,
                "end": 301
              }
            ],
            "start": 270,
            "end": 303
          },
          "expression": false,
          "start": 259,
          "end": 303
        },
        "start": 231,
        "end": 303
      },
      "directive": null,
      "start": 231,
      "end": 303
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 325
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
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 334
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 337,
              "end": 345
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 330,
            "end": 346
          }
        ],
        "start": 326,
        "end": 348
      },
      "abstract": false,
      "declare": false,
      "start": 305,
      "end": 348
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
            "name": "MixedComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 370
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 377
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 384
                },
                "optional": false,
                "computed": false,
                "start": 373,
                "end": 384
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 373,
              "end": 386
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 406
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 423
            },
            "start": 373,
            "end": 423
          },
          "definite": false,
          "start": 356,
          "end": 423
        }
      ],
      "declare": false,
      "start": 350,
      "end": 424
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
            "name": "elem1",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 437
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "FunctionComponent",
                "start": 441,
                "end": 458
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "type",
                    "start": 459,
                    "end": 463
                  },
                  "value": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "\"abc\"",
                    "start": 464,
                    "end": 469
                  },
                  "start": 459,
                  "end": 469
                }
              ],
              "selfClosing": true,
              "start": 440,
              "end": 472
            },
            "children": [],
            "closingElement": null,
            "start": 440,
            "end": 472
          },
          "definite": false,
          "start": 432,
          "end": 472
        }
      ],
      "declare": false,
      "start": 426,
      "end": 473
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
            "name": "elem2",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 485
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "FunctionComponent",
                "start": 489,
                "end": 506
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "abc",
                      "raw": "\"abc\"",
                      "start": 507,
                      "end": 512
                    },
                    "start": 507,
                    "end": 512
                  }
                ],
                "start": 506,
                "end": 513
              },
              "attributes": [],
              "selfClosing": true,
              "start": 488,
              "end": 516
            },
            "children": [],
            "closingElement": null,
            "start": 488,
            "end": 516
          },
          "definite": false,
          "start": 480,
          "end": 516
        }
      ],
      "declare": false,
      "start": 474,
      "end": 517
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
            "name": "elem3",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 529
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ClassComponent",
                "start": 533,
                "end": 547
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 532,
              "end": 550
            },
            "children": [],
            "closingElement": null,
            "start": 532,
            "end": 550
          },
          "definite": false,
          "start": 524,
          "end": 550
        }
      ],
      "declare": false,
      "start": 518,
      "end": 551
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
            "name": "elem4",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 563
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MixedComponent",
                "start": 567,
                "end": 581
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 566,
              "end": 584
            },
            "children": [],
            "closingElement": null,
            "start": 566,
            "end": 584
          },
          "definite": false,
          "start": 558,
          "end": 584
        }
      ],
      "declare": false,
      "start": 552,
      "end": 585
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
            "typeAnnotation": null,
            "start": 593,
            "end": 596
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MemberFunctionComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 626
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
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 642,
                          "end": 644
                        },
                        "start": 635,
                        "end": 645
                      }
                    ],
                    "start": 629,
                    "end": 649
                  },
                  "expression": false,
                  "start": 626,
                  "end": 649
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 603,
                "end": 649
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MemberClassComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 673
                },
                "value": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 681,
                    "end": 683
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 675,
                  "end": 683
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 653,
                "end": 683
              }
            ],
            "start": 599,
            "end": 686
          },
          "definite": false,
          "start": 593,
          "end": 686
        }
      ],
      "declare": false,
      "start": 587,
      "end": 687
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
            "name": "elem5",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 700
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "obj",
                  "start": 704,
                  "end": 707
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "MemberFunctionComponent",
                  "start": 708,
                  "end": 731
                },
                "start": 704,
                "end": 731
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 703,
              "end": 734
            },
            "children": [],
            "closingElement": null,
            "start": 703,
            "end": 734
          },
          "definite": false,
          "start": 695,
          "end": 734
        }
      ],
      "declare": false,
      "start": 689,
      "end": 735
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
            "name": "elem6",
            "optional": false,
            "typeAnnotation": null,
            "start": 742,
            "end": 747
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "obj",
                  "start": 751,
                  "end": 754
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "MemberClassComponent",
                  "start": 756,
                  "end": 776
                },
                "start": 751,
                "end": 776
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 750,
              "end": 779
            },
            "children": [],
            "closingElement": null,
            "start": 750,
            "end": 779
          },
          "definite": false,
          "start": 742,
          "end": 779
        }
      ],
      "declare": false,
      "start": 736,
      "end": 780
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 780
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 35,
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
    "value": "type",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "String",
    "value": "'element'",
    "start": 55,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 72,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 79,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "ElementClass",
    "start": 89,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "String",
    "value": "'element-class'",
    "start": 114,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 138,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 147,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 167,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 231,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "useThis",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 259,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 282,
    "end": 286
  },
  {
    "type": "JSXIdentifier",
    "value": "type",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "JSXText",
    "value": "\"foo\"",
    "start": 292,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 305,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "ClassComponent",
    "start": 311,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 337,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 350,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "MixedComponent",
    "start": 356,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 373,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 378,
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
    "value": "?",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 389,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "ClassComponent",
    "start": 409,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 426,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "elem1",
    "start": 432,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 440,
    "end": 441
  },
  {
    "type": "JSXIdentifier",
    "value": "FunctionComponent",
    "start": 441,
    "end": 458
  },
  {
    "type": "JSXIdentifier",
    "value": "type",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464
  },
  {
    "type": "JSXText",
    "value": "\"abc\"",
    "start": 464,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 474,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "elem2",
    "start": 480,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 488,
    "end": 489
  },
  {
    "type": "JSXIdentifier",
    "value": "FunctionComponent",
    "start": 489,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 506,
    "end": 507
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 507,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 518,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "elem3",
    "start": 524,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 532,
    "end": 533
  },
  {
    "type": "JSXIdentifier",
    "value": "ClassComponent",
    "start": 533,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 552,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "elem4",
    "start": 558,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 566,
    "end": 567
  },
  {
    "type": "JSXIdentifier",
    "value": "MixedComponent",
    "start": 567,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 587,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 593,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "MemberFunctionComponent",
    "start": 603,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 635,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "MemberClassComponent",
    "start": 653,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 675,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 689,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "elem5",
    "start": 695,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 703,
    "end": 704
  },
  {
    "type": "JSXIdentifier",
    "value": "obj",
    "start": 704,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 707,
    "end": 708
  },
  {
    "type": "JSXIdentifier",
    "value": "MemberFunctionComponent",
    "start": 708,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 736,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "elem6",
    "start": 742,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 750,
    "end": 751
  },
  {
    "type": "JSXIdentifier",
    "value": "obj",
    "start": 751,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 754,
    "end": 755
  },
  {
    "type": "JSXIdentifier",
    "value": "MemberClassComponent",
    "start": 756,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780
  }
]
```
