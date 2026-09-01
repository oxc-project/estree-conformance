__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 57
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
                    "name": "_i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 62
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 64,
                      "end": 67
                    },
                    "start": 62,
                    "end": 67
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 60,
                  "end": 68
                }
              ],
              "start": 58,
              "end": 70
            },
            "declare": false,
            "start": 32,
            "end": 70
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInterI",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 93
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 112
                },
                "typeArguments": null,
                "start": 97,
                "end": 112
              },
              "start": 95,
              "end": 112
            },
            "body": null,
            "expression": false,
            "start": 75,
            "end": 113
          }
        ],
        "start": 26,
        "end": 115
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 11,
      "end": 115
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 115
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
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 32,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 42,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 64,
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
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 75,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "getInterI",
    "start": 84,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 97,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 58
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
                    "name": "_r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 63
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 65,
                      "end": 68
                    },
                    "start": 63,
                    "end": 68
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 61,
                  "end": 69
                }
              ],
              "start": 59,
              "end": 71
            },
            "declare": false,
            "start": 32,
            "end": 71
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInterR",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 94
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 114
                },
                "typeArguments": null,
                "start": 98,
                "end": 114
              },
              "start": 96,
              "end": 114
            },
            "body": null,
            "expression": false,
            "start": 76,
            "end": 115
          }
        ],
        "start": 26,
        "end": 117
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 11,
      "end": 117
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 117
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
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 32,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 42,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "_r",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 76,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "getInterR",
    "start": 85,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 98,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getInterI",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 70
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 61,
        "end": 72
      },
      "exportKind": "value",
      "start": 46,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 46,
  "end": 73
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 53,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "getInterI",
    "start": 61,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getInterR",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 70
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 61,
        "end": 72
      },
      "exportKind": "value",
      "start": 46,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 46,
  "end": 73
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 53,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "getInterR",
    "start": 61,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 64
          },
          "start": 60,
          "end": 64
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./sub1/uses.js",
        "raw": "\"./sub1/uses.js\"",
        "start": 70,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 53,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 98
          },
          "start": 94,
          "end": 98
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./sub2/uses.js",
        "raw": "\"./sub2/uses.js\"",
        "start": 104,
        "end": 120
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 120
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSAsExpression",
        "expression": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 141
            },
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 147
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "default",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 155
              },
              "optional": false,
              "computed": false,
              "start": 143,
              "end": 155
            }
          ],
          "start": 136,
          "end": 156
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "const",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 165
          },
          "typeArguments": null,
          "start": 160,
          "end": 165
        },
        "start": 136,
        "end": 165
      },
      "exportKind": "value",
      "start": 121,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 53,
  "end": 166
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 53,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 60,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 65,
    "end": 69
  },
  {
    "type": "String",
    "value": "\"./sub1/uses.js\"",
    "start": 70,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 87,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 94,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 99,
    "end": 103
  },
  {
    "type": "String",
    "value": "\"./sub2/uses.js\"",
    "start": 104,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 143,
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
    "value": "default",
    "start": 148,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 157,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 160,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  }
]
```
