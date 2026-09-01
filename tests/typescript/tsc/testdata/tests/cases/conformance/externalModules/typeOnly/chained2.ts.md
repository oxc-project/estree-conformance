__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              },
              "start": 12,
              "end": 20
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 10,
            "end": 20
          }
        ],
        "start": 8,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 49
          },
          "exportKind": "value",
          "start": 37,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 23,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 23,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 39,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 42,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 14,
        "end": 19
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 20
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 42
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "importKind": "value",
          "start": 35,
          "end": 47
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 55,
        "end": 60
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 21,
      "end": 61
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "exportKind": "value",
          "start": 71,
          "end": 72
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "exportKind": "value",
          "start": 74,
          "end": 75
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 62,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 79
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
    "type": "Identifier",
    "value": "A",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "'./a'",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 21,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 28,
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
    "value": "default",
    "start": 35,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 43,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
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
    "value": "'./a'",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "'./b'",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 55
          },
          "exportKind": "value",
          "start": 39,
          "end": 55
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
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
    "value": "types",
    "start": 12,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "'./b'",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 48,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
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
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 12
          },
          "start": 7,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./c",
        "raw": "'./c'",
        "start": 18,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 34
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 36
          },
          "optional": false,
          "computed": false,
          "start": 29,
          "end": 36
        },
        "typeArguments": null,
        "arguments": [],
        "start": 25,
        "end": 38
      },
      "directive": null,
      "start": 25,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 49
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 51
        },
        "typeArguments": null,
        "arguments": [],
        "start": 40,
        "end": 53
      },
      "directive": null,
      "start": 40,
      "end": 54
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "types",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 69
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 71
                  },
                  "start": 64,
                  "end": 71
                },
                "typeArguments": null,
                "start": 64,
                "end": 71
              },
              "start": 62,
              "end": 71
            },
            "start": 61,
            "end": 71
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 74,
            "end": 76
          },
          "definite": false,
          "start": 61,
          "end": 76
        }
      ],
      "declare": false,
      "start": 55,
      "end": 77
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "types",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 92
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 94
                  },
                  "start": 87,
                  "end": 94
                },
                "typeArguments": null,
                "start": 87,
                "end": 94
              },
              "start": 85,
              "end": 94
            },
            "start": 84,
            "end": 94
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 97,
            "end": 99
          },
          "definite": false,
          "start": 84,
          "end": 99
        }
      ],
      "declare": false,
      "start": 78,
      "end": 100
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 100
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
    "type": "Identifier",
    "value": "types",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "'./c'",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 55,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 61,
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
    "value": "types",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 84,
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
    "value": "types",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  }
]
```
