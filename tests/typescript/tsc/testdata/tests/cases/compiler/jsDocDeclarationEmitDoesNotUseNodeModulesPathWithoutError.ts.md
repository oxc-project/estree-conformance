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
          "name": "LionRequestInit",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 27
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "../types/types.js",
            "raw": "'../types/types.js'",
            "start": 37,
            "end": 56
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "LionRequestInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 73
          },
          "typeArguments": null,
          "start": 30,
          "end": 73
        },
        "declare": false,
        "start": 7,
        "end": 74
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 74
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
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
    "value": "LionRequestInit",
    "start": 12,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "String",
    "value": "'../types/types.js'",
    "start": 37,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "LionRequestInit",
    "start": 58,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LionRequestInit",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 32
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "body",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 43
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNullKeyword",
                      "start": 46,
                      "end": 50
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 53,
                        "end": 59
                      },
                      "typeArguments": null,
                      "start": 53,
                      "end": 59
                    }
                  ],
                  "start": 46,
                  "end": 59
                },
                "start": 44,
                "end": 59
              },
              "accessibility": null,
              "static": false,
              "start": 39,
              "end": 60
            }
          ],
          "start": 33,
          "end": 62
        },
        "declare": false,
        "start": 7,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 62
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
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
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "LionRequestInit",
    "start": 17,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Null",
    "value": "null",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  }
]
```
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
          "name": "NewAjax",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 96
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
                "name": "case5_unexpectedlyResolvesPathToNodeModules",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 201
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "init",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 206
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 208,
                  "end": 210
                },
                "expression": false,
                "start": 201,
                "end": 210
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 158,
              "end": 210
            }
          ],
          "start": 97,
          "end": 212
        },
        "abstract": false,
        "declare": false,
        "start": 83,
        "end": 212
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 76,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "NewAjax",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 293
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 303
          },
          "optional": false,
          "computed": false,
          "start": 286,
          "end": 303
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "case6_unexpectedlyResolvesPathToNodeModules",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 347
        },
        "optional": false,
        "computed": false,
        "start": 286,
        "end": 347
      },
      "directive": null,
      "start": 286,
      "end": 348
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 76,
  "end": 348
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "NewAjax",
    "start": 89,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "case5_unexpectedlyResolvesPathToNodeModules",
    "start": 158,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 202,
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
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "NewAjax",
    "start": 286,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "case6_unexpectedlyResolvesPathToNodeModules",
    "start": 304,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  }
]
```
