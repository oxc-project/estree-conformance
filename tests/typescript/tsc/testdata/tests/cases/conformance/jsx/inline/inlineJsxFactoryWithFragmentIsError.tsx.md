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
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 72
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 91,
                                "end": 97
                              },
                              "start": 89,
                              "end": 97
                            },
                            "start": 88,
                            "end": 97
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 100,
                            "end": 103
                          },
                          "start": 98,
                          "end": 103
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 87,
                        "end": 104
                      }
                    ],
                    "start": 73,
                    "end": 114
                  },
                  "declare": false,
                  "start": 45,
                  "end": 114
                }
              ],
              "start": 35,
              "end": 120
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 21,
            "end": 120
          }
        ],
        "start": 15,
        "end": 122
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 122
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 142
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 146,
            "end": 150
          },
          "start": 144,
          "end": 150
        },
        "body": null,
        "expression": false,
        "start": 130,
        "end": 151
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 123,
      "end": 151
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 181
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 185,
            "end": 189
          },
          "start": 183,
          "end": 189
        },
        "body": null,
        "expression": false,
        "start": 159,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 152,
      "end": 190
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 190
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
    "type": "Identifier",
    "value": "global",
    "start": 8,
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
    "value": "namespace",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 55,
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
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 123,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 130,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 152,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 159,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 168,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 49
          },
          "start": 39,
          "end": 49
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 55,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 68
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 69,
          "end": 71
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "h",
                "start": 72,
                "end": 73
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 71,
              "end": 74
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "h",
                "start": 76,
                "end": 77
              },
              "start": 74,
              "end": 78
            },
            "start": 71,
            "end": 78
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 78,
          "end": 81
        },
        "start": 69,
        "end": 81
      },
      "directive": null,
      "start": 69,
      "end": 81
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 81
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 41,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 50,
    "end": 54
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 55,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 75,
    "end": 76
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 28
          },
          "importKind": "value",
          "start": 25,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 36,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 16,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 50,
          "end": 52
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "h",
                "start": 53,
                "end": 54
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 52,
              "end": 55
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "h",
                "start": 57,
                "end": 58
              },
              "start": 55,
              "end": 59
            },
            "start": 52,
            "end": 59
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 59,
          "end": 62
        },
        "start": 50,
        "end": 62
      },
      "directive": null,
      "start": 50,
      "end": 62
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 16,
  "end": 62
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 31,
    "end": 35
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 36,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 52,
    "end": 53
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 56,
    "end": 57
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  }
]
```
