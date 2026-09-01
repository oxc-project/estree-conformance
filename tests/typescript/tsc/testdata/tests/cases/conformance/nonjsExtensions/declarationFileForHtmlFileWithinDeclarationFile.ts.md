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
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 12,
        "end": 15
      },
      "source": {
        "type": "Literal",
        "value": "./component.html",
        "raw": "\"./component.html\"",
        "start": 21,
        "end": 39
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 40
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file.js",
        "raw": "\"./file.js\"",
        "start": 20,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
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
              "start": 34,
              "end": 40
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "customElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 55
            },
            "optional": false,
            "computed": false,
            "start": 34,
            "end": 55
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "define",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 62
          },
          "optional": false,
          "computed": false,
          "start": 34,
          "end": 62
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "my-html5-element",
            "raw": "\"my-html5-element\"",
            "start": 63,
            "end": 81
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 86
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTML5Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 99
            },
            "optional": false,
            "computed": false,
            "start": 83,
            "end": 99
          }
        ],
        "optional": false,
        "start": 34,
        "end": 100
      },
      "directive": null,
      "start": 34,
      "end": 101
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
          "start": 107,
          "end": 115
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
            "start": 120,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 131
          },
          "optional": false,
          "computed": false,
          "start": 120,
          "end": 131
        },
        "start": 107,
        "end": 131
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
                    "start": 139,
                    "end": 147
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 148,
                    "end": 152
                  },
                  "optional": false,
                  "computed": false,
                  "start": 139,
                  "end": 152
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "appendChild",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 164
                },
                "optional": false,
                "computed": false,
                "start": 139,
                "end": 164
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
                    "start": 165,
                    "end": 168
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "blogPost",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 177
                  },
                  "optional": false,
                  "computed": false,
                  "start": 165,
                  "end": 177
                }
              ],
              "optional": false,
              "start": 139,
              "end": 178
            },
            "directive": null,
            "start": 139,
            "end": 179
          }
        ],
        "start": 133,
        "end": 181
      },
      "alternate": null,
      "start": 103,
      "end": 181
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 181
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
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"./file.js\"",
    "start": 20,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "customElements",
    "start": 41,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "define",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"my-html5-element\"",
    "start": 63,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 83,
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
    "value": "HTML5Element",
    "start": 87,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 107,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 124,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 139,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "appendChild",
    "start": 153,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "blogPost",
    "start": 169,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  }
]
```
