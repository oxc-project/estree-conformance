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
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 140
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
            "start": 144,
            "end": 148
          },
          "start": 142,
          "end": 148
        },
        "body": null,
        "expression": false,
        "start": 130,
        "end": 149
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 123,
      "end": 149
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsx",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 169
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
            "start": 173,
            "end": 177
          },
          "start": 171,
          "end": 177
        },
        "body": null,
        "expression": false,
        "start": 157,
        "end": 178
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 178
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Fragment",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 203
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
            "start": 207,
            "end": 211
          },
          "start": 205,
          "end": 211
        },
        "body": null,
        "expression": false,
        "start": 186,
        "end": 212
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 179,
      "end": 212
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 213
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
    "value": "h",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 144,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 150,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 157,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "jsx",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 179,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 186,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Fragment",
    "start": 195,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "importKind": "value",
          "start": 47,
          "end": 48
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "importKind": "value",
          "start": 50,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 65,
        "end": 77
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 79,
          "end": 81
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 82,
                "end": 85
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 81,
              "end": 86
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 88,
                "end": 91
              },
              "start": 86,
              "end": 92
            },
            "start": 81,
            "end": 92
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 92,
          "end": 95
        },
        "start": 79,
        "end": 95
      },
      "directive": null,
      "start": 79,
      "end": 95
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 96
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Fragment",
    "start": 50,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 60,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 65,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 87,
    "end": 88
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95
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
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "importKind": "value",
          "start": 43,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 67,
          "end": 69
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 70,
                "end": 74
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 69,
              "end": 75
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 77,
                "end": 81
              },
              "start": 75,
              "end": 82
            },
            "start": 69,
            "end": 82
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 82,
          "end": 85
        },
        "start": 67,
        "end": 85
      },
      "directive": null,
      "start": 67,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 86
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "jsx",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 53,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 76,
    "end": 77
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "importKind": "value",
          "start": 47,
          "end": 48
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "importKind": "value",
          "start": 50,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 65,
        "end": 77
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 79,
          "end": 81
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 81,
          "end": 84
        },
        "start": 79,
        "end": 84
      },
      "directive": null,
      "start": 79,
      "end": 84
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 85
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Fragment",
    "start": 50,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 60,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 65,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
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
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "importKind": "value",
          "start": 43,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 67,
          "end": 69
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 69,
          "end": 72
        },
        "start": 67,
        "end": 72
      },
      "directive": null,
      "start": 67,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 73
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "jsx",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 53,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
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
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 55
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 55
          },
          "importKind": "value",
          "start": 47,
          "end": 55
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 62,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 75
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 76,
          "end": 78
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 78,
          "end": 81
        },
        "start": 76,
        "end": 81
      },
      "directive": null,
      "start": 76,
      "end": 81
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 82
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Fragment",
    "start": 47,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 57,
    "end": 61
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 62,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
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
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 50,
        "end": 62
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 64,
          "end": 66
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 66,
          "end": 69
        },
        "start": 64,
        "end": 69
      },
      "directive": null,
      "start": 64,
      "end": 69
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 70
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 45,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 50,
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
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "importKind": "value",
          "start": 47,
          "end": 48
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "importKind": "value",
          "start": 50,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 65,
        "end": 77
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 80,
            "end": 83
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 79,
          "end": 84
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 86,
            "end": 89
          },
          "start": 84,
          "end": 90
        },
        "start": 79,
        "end": 90
      },
      "directive": null,
      "start": 79,
      "end": 90
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 91
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Fragment",
    "start": 50,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 60,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 65,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 85,
    "end": 86
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
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
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "importKind": "value",
          "start": 43,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 68,
            "end": 71
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 67,
          "end": 72
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 74,
            "end": 77
          },
          "start": 72,
          "end": 78
        },
        "start": 67,
        "end": 78
      },
      "directive": null,
      "start": 67,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 79
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "jsx",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 53,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 73,
    "end": 74
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "importKind": "value",
          "start": 26,
          "end": 27
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 34,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 18,
      "end": 47
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 66
      },
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
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 78,
              "end": 82
            },
            "start": 71,
            "end": 83
          }
        ],
        "start": 69,
        "end": 85
      },
      "expression": false,
      "start": 48,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Component",
            "start": 87,
            "end": 96
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 86,
          "end": 99
        },
        "children": [],
        "closingElement": null,
        "start": 86,
        "end": 99
      },
      "directive": null,
      "start": 86,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 18,
  "end": 99
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 29,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 34,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 48,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 57,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 71,
    "end": 77
  },
  {
    "type": "Null",
    "value": "null",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 87,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  }
]
```
