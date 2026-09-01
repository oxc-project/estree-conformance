__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "initializer": null,
            "computed": false,
            "start": 18,
            "end": 21
          }
        ],
        "start": 14,
        "end": 24
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 55
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 75
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 86
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 60,
              "end": 87
            }
          ],
          "start": 56,
          "end": 89
        },
        "abstract": false,
        "declare": false,
        "start": 40,
        "end": 89
      },
      "exportKind": "value",
      "start": 25,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "SomeEnum",
    "start": 5,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 32,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 46,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 60,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "SomeEnum",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
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
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Def",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 22
          },
          "importKind": "value",
          "start": 8,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 29,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Def",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 46
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 48
              },
              "optional": false,
              "computed": false,
              "start": 43,
              "end": 48
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 52
            },
            "optional": false,
            "computed": false,
            "start": 43,
            "end": 52
          },
          "definite": false,
          "start": 39,
          "end": 52
        }
      ],
      "declare": false,
      "start": 35,
      "end": 53
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
    "value": "default",
    "start": 8,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 16,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "Def",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 24,
    "end": 28
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 29,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Def",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 47,
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
    "value": "one",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  }
]
```
