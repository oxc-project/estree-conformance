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
            "name": "List",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "List",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "unknown-module",
        "raw": "'unknown-module'",
        "start": 21,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyList",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 57
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "List",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 64
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 65,
                "end": 71
              }
            ],
            "start": 64,
            "end": 72
          },
          "start": 60,
          "end": 72
        },
        "declare": false,
        "start": 46,
        "end": 73
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 39,
      "end": 73
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
    "value": "List",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
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
    "value": "'unknown-module'",
    "start": 21,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 39,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 46,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 65,
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyList",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyList",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 20
          },
          "importKind": "type",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 28,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 59,
                "end": 62
              },
              "start": 57,
              "end": 62
            },
            "start": 48,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 62
        }
      ],
      "declare": true,
      "start": 36,
      "end": 63
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 74
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Decorator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 89
                },
                "start": 79,
                "end": 89
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myList",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 96
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 105
                },
                "typeArguments": null,
                "start": 99,
                "end": 105
              },
              "start": 97,
              "end": 105
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 79,
            "end": 106
          }
        ],
        "start": 75,
        "end": 108
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 108
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
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
    "value": "type",
    "start": 9,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "MyList",
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
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27
  },
  {
    "type": "String",
    "value": "'./a'",
    "start": 28,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 36,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Decorator",
    "start": 48,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Decorator",
    "start": 80,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "myList",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  }
]
```
