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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 41
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 42,
                    "end": 43
                  }
                ],
                "start": 41,
                "end": 44
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 48
              },
              "declare": false,
              "start": 27,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 48
          }
        ],
        "start": 14,
        "end": 50
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 64
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 87
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 89
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 88,
                    "end": 89
                  }
                ],
                "start": 87,
                "end": 90
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 105
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 110
                    },
                    "optional": false,
                    "computed": false,
                    "start": 102,
                    "end": 110
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 111,
                          "end": 112
                        },
                        "typeArguments": null,
                        "start": 111,
                        "end": 112
                      }
                    ],
                    "start": 110,
                    "end": 113
                  },
                  "start": 102,
                  "end": 113
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 114,
                "end": 117
              },
              "abstract": false,
              "declare": false,
              "start": 78,
              "end": 117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 71,
            "end": 117
          }
        ],
        "start": 65,
        "end": 119
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 51,
      "end": 119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 119
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 71,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 91,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  }
]
```
