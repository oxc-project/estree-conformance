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
            "name": "doc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 255
                },
                "typeArguments": null,
                "start": 247,
                "end": 255
              },
              "start": 245,
              "end": 255
            },
            "start": 242,
            "end": 255
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 255
        }
      ],
      "declare": true,
      "start": 230,
      "end": 256
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "doc",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 275
      },
      "exportKind": "value",
      "start": 257,
      "end": 276
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
              "name": "blogPost",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 401
                  },
                  "typeArguments": null,
                  "start": 394,
                  "end": 401
                },
                "start": 392,
                "end": 401
              },
              "start": 384,
              "end": 401
            },
            "init": null,
            "definite": false,
            "start": 384,
            "end": 401
          }
        ],
        "declare": false,
        "start": 378,
        "end": 402
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 371,
      "end": 402
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTML5Element",
          "optional": false,
          "typeAnnotation": null,
          "start": 417,
          "end": 429
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 449
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
                "name": "connectedCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 473
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
                    "start": 477,
                    "end": 481
                  },
                  "start": 475,
                  "end": 481
                },
                "body": null,
                "expression": false,
                "start": 473,
                "end": 482
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 456,
              "end": 482
            }
          ],
          "start": 450,
          "end": 484
        },
        "abstract": false,
        "declare": false,
        "start": 411,
        "end": 484
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 404,
      "end": 484
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 230,
  "end": 485
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 230,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "doc",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Document",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 257,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 264,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "doc",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 371,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 378,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "blogPost",
    "start": 384,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 394,
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
    "start": 404,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 411,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "HTML5Element",
    "start": 417,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 430,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 438,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "connectedCallback",
    "start": 456,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component.html",
        "raw": "\"./component.html\"",
        "start": 21,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 48
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "customElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 63
            },
            "optional": false,
            "computed": false,
            "start": 42,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "define",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 70
          },
          "optional": false,
          "computed": false,
          "start": 42,
          "end": 70
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "my-html5-element",
            "raw": "\"my-html5-element\"",
            "start": 71,
            "end": 89
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 94
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTML5Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 107
            },
            "optional": false,
            "computed": false,
            "start": 91,
            "end": 107
          }
        ],
        "optional": false,
        "start": 42,
        "end": 108
      },
      "directive": null,
      "start": 42,
      "end": 109
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "document",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 123
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 139
          },
          "optional": false,
          "computed": false,
          "start": 128,
          "end": 139
        },
        "start": 115,
        "end": 139
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "document",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 155
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 160
                  },
                  "optional": false,
                  "computed": false,
                  "start": 147,
                  "end": 160
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "appendChild",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 172
                },
                "optional": false,
                "computed": false,
                "start": 147,
                "end": 172
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 176
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "blogPost",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 185
                  },
                  "optional": false,
                  "computed": false,
                  "start": 173,
                  "end": 185
                }
              ],
              "optional": false,
              "start": 147,
              "end": 186
            },
            "directive": null,
            "start": 147,
            "end": 187
          }
        ],
        "start": 141,
        "end": 189
      },
      "alternate": null,
      "start": 111,
      "end": 189
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 189
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
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 12,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"./component.html\"",
    "start": 21,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "customElements",
    "start": 49,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "define",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "String",
    "value": "\"my-html5-element\"",
    "start": 71,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "HTML5Element",
    "start": 95,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 115,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 124,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 147,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "appendChild",
    "start": 161,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "blogPost",
    "start": 177,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  }
]
```
