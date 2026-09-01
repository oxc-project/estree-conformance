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
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tags",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 87
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "span",
              "raw": "\"span\"",
              "start": 90,
              "end": 96
            },
            "start": 90,
            "end": 96
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "div",
              "raw": "\"div\"",
              "start": 99,
              "end": 104
            },
            "start": 99,
            "end": 104
          }
        ],
        "start": 90,
        "end": 104
      },
      "declare": false,
      "start": 78,
      "end": 105
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Hoc",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 123
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 130
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 143
                      },
                      "typeArguments": null,
                      "start": 139,
                      "end": 143
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 127,
                    "end": 143
                  }
                ],
                "start": 126,
                "end": 144
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TagElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 164
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 164
                    },
                    "start": 159,
                    "end": 164
                  },
                  "start": 149,
                  "end": 164
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 174
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SFC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 178
                    },
                    "start": 169,
                    "end": 178
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 178
                },
                "start": 167,
                "end": 178
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 202
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "JSXElement",
                            "openingElement": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "TagElement",
                                "start": 212,
                                "end": 222
                              },
                              "typeArguments": null,
                              "attributes": [],
                              "selfClosing": true,
                              "start": 211,
                              "end": 225
                            },
                            "children": [],
                            "closingElement": null,
                            "start": 211,
                            "end": 225
                          },
                          "id": null,
                          "generator": false,
                          "start": 205,
                          "end": 225
                        },
                        "definite": false,
                        "start": 193,
                        "end": 225
                      }
                    ],
                    "declare": false,
                    "start": 187,
                    "end": 226
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 246
                    },
                    "start": 230,
                    "end": 247
                  }
                ],
                "start": 182,
                "end": 249
              },
              "id": null,
              "generator": false,
              "start": 126,
              "end": 249
            },
            "definite": false,
            "start": 120,
            "end": 249
          }
        ],
        "declare": false,
        "start": 114,
        "end": 250
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 250
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 250
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 54,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 63,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 78,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Tags",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"span\"",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 97,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Hoc",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 127,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Tags",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "TagElement",
    "start": 149,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "SFC",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 187,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 193,
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
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "JSXIdentifier",
    "value": "TagElement",
    "start": 212,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 230,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 237,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  }
]
```
