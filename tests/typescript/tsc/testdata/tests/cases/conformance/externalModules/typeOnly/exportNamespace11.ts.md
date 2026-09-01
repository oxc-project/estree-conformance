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
            "name": "intermediate",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 24
          },
          "start": 7,
          "end": 24
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./intermediate",
        "raw": "'./intermediate'",
        "start": 30,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 46
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
            "name": "ghost",
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
                    "name": "intermediate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 72
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Ghost",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 78
                  },
                  "start": 60,
                  "end": 78
                },
                "typeArguments": null,
                "start": 60,
                "end": 78
              },
              "start": 58,
              "end": 78
            },
            "start": 53,
            "end": 78
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "intermediate",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 97
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ghost",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 103
              },
              "optional": false,
              "computed": false,
              "start": 85,
              "end": 103
            },
            "typeArguments": null,
            "arguments": [],
            "start": 81,
            "end": 105
          },
          "definite": false,
          "start": 53,
          "end": 105
        }
      ],
      "declare": false,
      "start": 47,
      "end": 105
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 106
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
    "value": "intermediate",
    "start": 12,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 25,
    "end": 29
  },
  {
    "type": "String",
    "value": "'./intermediate'",
    "start": 30,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "ghost",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "intermediate",
    "start": 60,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Ghost",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "intermediate",
    "start": 85,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "Ghost",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
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
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./ghost",
        "raw": "'./ghost'",
        "start": 19,
        "end": 28
      },
      "attributes": [],
      "exportKind": "type",
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
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
    "type": "Punctuator",
    "value": "*",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "'./ghost'",
    "start": 19,
    "end": 28
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
          "name": "Ghost",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 18
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 19,
          "end": 21
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 21
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Ghost",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21
  }
]
```
